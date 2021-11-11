const router = require("express").Router();
const Course = require("../models").courseModel;
const courseValidation = require("../validation").courseValidation;

router.use((req, res, next) => {
  console.log("A request is coming into api...");
  next();
});

router.get("/", (req, res) => {
  Course.find({})
    .populate("instructor", ["username", "email"])
    .then((course) => {
      res.send(course);
    })
    .catch(() => {
      res.status(500).send("Error !! Cannot get course!!");
    });
});

router.post("/instructor", (req, res) => {
  console.log(req.params, "req.params");
  let instructor_id = req.body._id;

  // console.log(req.body, "sdasdasdasdasasdassa");

  Course.find({ instructor: instructor_id })
    .populate("instructor", ["username", "email"])
    .then((data) => {
      // console.log(data, "data");
      res.send(data);
    })
    .catch(() => {
      res.status(500).send("Cannot get course data");
    });
});

router.post("/instructor/:id", (req, res) => {
  // console.log(req.params, "req.params");
  let { id } = req.params;
  // console.log(req.body, "sdasdasdasdasasdassa");
  Course.find({ instructor: id })
    .populate("instructor", ["username", "email"])
    .then((data) => {
      // console.log(data, "data");
      res.send(data);
    })
    .catch(() => {
      res.status(500).send("Cannot get course data");
    });
});

router.post("/student", (req, res) => {
  // console.log(req.user, "123");
  let _student_id = req.body._id;
  // console.log(req.params, "123");
  console.log("studnet_id", _student_id);
  Course.find({ students: _student_id })
    .populate("instructor", ["username", "email"])
    .then((data) => {
      console.log(data, "coursescourses");
      res.status(200).send(data);
    })
    .catch(() => {
      res.status(500).send("Cannot get data.");
    });
});

router.get("/findByName/:name", (req, res) => {
  let { name } = req.params;
  Course.find({ title: name })
    .populate("instructor", ["username"], ["email"])
    .then((course) => {
      res.status(200).send(course);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  Course.findOne({ _id })
    .populate("instructor", ["email"])
    .then((course) => {
      res.send(course);
    })
    .catch((e) => {
      res.send(e);
    });
});

router.post("/", async (req, res) => {
  //validate the inputs before making a new course
  // console.log(req.params, "req");
  const { error } = courseValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let { title, description, price, startDate, max } = req.body;
  if (req.user.isStudent()) {
    return res.status(400).send("Only instructor can post a new course");
  }

  let newCourse = new Course({
    title,
    description,
    price,
    startDate,
    max,
    instructor: req.user._id,
  });

  try {
    await newCourse.save();
    res.status(200).send("New course has been saved.");
  } catch (err) {
    res.status(400).send("Cannot save course");
  }
});

router.post("/enroll/:_id", async (req, res) => {
  //check if the user exist
  // console.log(req, "hihihihihasdasdas");

  const reEnrollId = await Course.findOne({ _id: req.params._id });
  // const reEnrollId_students = reEnrollId.students;
  // console.log("hihi", reEnrollId);
  // // console.log("=====================================");
  let { user_id } = req.body;
  // console.log(Object.values(user_id), "user_id");

  console.log(reEnrollId.max, "newEnrolllllllll");
  // // console.log("=====================================");

  // for (let i in user_id) {
  //   console.log(user_id, "iiii");
  // }

  // reEnrollId_students.map((student) => {
  //   console.log(
  //     "student===========================================================================",
  //     student._id
  //   );
  //   return (student._id === user_id._id) res.status(400).send("You enrolled already.");

  // }
  // );

  for (let i = 0; i < reEnrollId.students.length; i++) {
    if (reEnrollId.students[i]._id === user_id._id) {
      // console.log(reEnrollId.students[i], "user id 1");
      return res.status(400).send("You enrolled already.");
    }
  }

  if (reEnrollId.students.length === reEnrollId.max) {
    // console.log("maxmaxmaxmaxmax22222222");
    return res.status(400).send("The Course is full.");
  }

  let { _id } = req.params;

  try {
    let course = await Course.findOne({ _id });
    // console.log(course, "course.students");
    course.students.push(user_id);
    // console.log(course, "course123");
    // console.log({ _id }, "123dsfsdfdsfdsfdssdf");
    // console.log(course.save(), "save");
    await course.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("ok");
      }
    });
    res.send("Done Enrollment");
  } catch (err) {
    res.send(err);
  }
});

router.get("/allcourses/allcourses", (req, res) => {
  console.log("working");
  Course.find({})
    .populate("instructor", ["username", "email"])
    .then((course) => {
      console.log(course);
      res.send(course);
    })
    .catch(() => {
      res.status(500).send("Error !! Cannot get course!!");
    });
});

router.post("/:_id", async (req, res) => {
  // console.log(req.body, "reqbody");
  // console.log(req.params, "params");
  //validate the inputs before making a new course
  // const { error } = courseValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  let { _id } = req.params;
  let { title, description, max, price, startDate } = req.body;
  console.log(_id, "id");
  let course = await Course.findOne({ _id });
  console.log(course, "course");
  if (!course) {
    res.status(404);
    return res.json({
      success: false,
      message: "Course not found.",
    });
  }

  if (course.students.length >= 1) {
    return res.status(404).send("nononono");
  }

  if (course.instructor.equals(req.user._id) || req.user.isAdmin()) {
    Course.findOneAndUpdate(
      { _id },
      { title, description, max, price, startDate },
      {
        new: true,
        runValidators: true,
      }
    )
      .then(() => {
        res.send("Course updated.");
        console.log("true");
      })
      .catch((e) => {
        res.send({
          success: false,
          message: e,
        });
      });
  } else {
    res.status(403);
    return res.json({
      success: false,
      message: "Only the instructor of this course or web admin can edit this",
    });
  }
});

router.post("/deletestudent/:_id", async (req, res) => {
  console.log("student delete working");
  const deleteStudents = await Course.findOne({ _id: req.params._id });
  const { user } = req.body;
  // console.log("============================================");
  // console.log(req.params, "user_id");
  // console.log("==========================");
  // console.log(deleteStudents, "deelete");
  // console.log(user, "user");
  // console.log("==========================");

  for (let i = 0; i < deleteStudents.students.length; i++) {
    // console.log("if loop");
    // console.log(deleteStudents);
    if (deleteStudents.students[i]._id === user._id) {
      // console.log("if loop if loop");
      // console.log(deleteStudents.students[i], "deleteStudents.students[i]");
      try {
        deleteStudents.students.pull(deleteStudents.students[i]);
        await deleteStudents.save((err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("ok");
          }
        });
        res.status(200).send("Course deleted.");
      } catch (err) {
        res.send(err);
      }
    }
  }
});

router.delete("/deletecourse/:_id", async (req, res) => {
  console.log("delete working");
  console.log(req.params);
  let { _id } = req.params;
  console.log(_id, "_id");

  let course = await Course.findOne({ _id });
  console.log(course, "course.students");
  // console.log(course);
  if (!course) {
    res.status(404);
    return res.json({
      success: false,
      message: "Course not found.",
    });
  }
  if (course.instructor.equals(req.user._id) || req.user.isAdmin()) {
    Course.deleteOne(course)
      .then(() => {
        res.send("Course deleted.");
        console.log(course_id, "123123");
      })
      .catch((e) => {
        res.send({
          success: false,
          message: e,
        });
      });
    console.log("true");
  } else {
    // res.status(403);
    // return res.json({
    //   success: false,
    //   message: "Only the instructor of this course or web admin can edit this",
    // });
    console.log("false");
  }
});

module.exports = router;

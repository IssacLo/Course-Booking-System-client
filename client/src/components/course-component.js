import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import Course from "../server/models/course-model";
import CourseService from "../services/course.service";

const CourseComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();

  const handleTakeToLogin = () => {
    history.push("/login");
  };

  const handleUpdate = () => {
    // CourseService.editCourse(e.target.id)
    //   .then(() => {
    history.push("/postCourse");
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  const handleDeleteStudentCourse = (e) => {
    console.log(currentUser.user._id, "currentUser.user._id");
    console.log("handleDelete working ");
    console.log(e.target.id);
    console.log("hhihi");

    CourseService.deleteStudentCourse(e.target.id, currentUser.user._id)
      .then(() => {
        window.alert("Deleted");
        history.go(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    console.log("handleDelete working ");
    console.log(e.target.id);

    CourseService.deleteCourse(e.target.id)
      .then(() => {
        window.alert("Deleted");
        history.go(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let [courseData, setCourseData] = useState(null);
  let [studentData, setStudentData] = useState(null);
  useEffect(() => {
    console.log("Using effect");
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
    } else {
      _id = "";
    }

    if (currentUser.user.role == "instructor") {
      CourseService.get(_id)
        .then((data) => {
          let students = data;
          console.log(students, "data.data");

          setCourseData(data.data);
          setStudentData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });

      // CourseService.updateCourse(_id)
      //   .then((data) => {
      //     console.log(data);
      //     setCourseData(data.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    } else if (currentUser.user.role == "student") {
      CourseService.getEnrolledCourses(_id)
        .then((data) => {
          setCourseData(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  // courseData.map((e) => {
  //   console.log("e", e);
  // });
  // console.log(courseData);

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You must login before seeing your courses.</p>
          <button className="btn btn-primary btn-lg" onClick={handleTakeToLogin}>
            Take me to login page
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div>
          <h1>Welcome to instructor's Course page</h1>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div>
          <h1>Welcome to student's Course page</h1>
        </div>
      )}
      {currentUser && courseData && courseData.length != 0 && (
        <div>
          <p>Here's the data we got back from server.</p>
          {courseData.map((course) => (
            <div key={course._id} className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                {currentUser && currentUser.user.role == "student" && (
                  <p>Instructor: {course.instructor.username}</p>
                )}
                <p className="card-text">{course.description}</p>

                {/* <p>{course.students}</p> */}
                <p>Student Count: {course.students.length}</p>

                <p>Price: ${course.price}</p>
                {currentUser && currentUser.user.role == "student" && (
                  <button
                    className="btn btn-primary "
                    onClick={handleDeleteStudentCourse}
                    id={course._id}
                  >
                    Delete
                  </button>
                )}
                {currentUser && currentUser.user.role == "instructor" && (
                  <button className="btn btn-primary " onClick={handleDelete} id={course._id}>
                    Delete
                  </button>
                )}
                {currentUser && currentUser.user.role == "instructor" && (
                  <button className="btn btn-primary " onClick={handleUpdate} id={course._id}>
                    Update
                  </button>
                )}
                {/* {currentUser && currentUser.user.role == "student" && (
                  <button className="btn btn-primary ">Enroll</button>
                )} */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseComponent;

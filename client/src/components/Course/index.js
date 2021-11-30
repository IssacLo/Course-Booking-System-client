import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BsSave2 } from "react-icons/bs";
import { ImWarning } from "react-icons/im";
import { MdOutlineDone } from "react-icons/md";
// import Course from "../server/models/course-model";
import CourseService from "../../services/course.service";

import {
  Container,
  H1,
  DivWrapper1,
  DivWrapper2,
  DivWrapper3,
  CourseWrapper,
  CourseWrap,
  CourseRow,
  CourseH5,
  CourseP,
  CourseBtn,
  CourseBtn1,
  CourseBtn2,
  CourseBtn3,
  CoursePwrap,
  EditWrapper,
  EditLabel,
  EditInputH5,
  EditInput,
  EditText,
  EditDateWrap,
  EditDate,
  PopUpBackground,
  PopUpContainer,
  PopUpCloseBtn,
  PopUpCloseBtn1,
  PopUpTitle,
  PopUpH1,
  PopUpP,
  PopUpBtn1,
  PopUpBtn2,
  PopUpFooter,
  PopUpBtn,
  MsgWrap,
  MsgDiv,
  MsgDivOne,
  // MsgContainer,
  MsgIcon,
  MsgH1,
  MsgP,
  MsgBtnDiv,
  MsgBtn,
  MsgBtn1,
  MsgBtn2,
  EditWrap,
} from "./CourseElement";
import { connect } from "mongoose";

const Course = (props) => {
  const { currentUser, setCurrentUser } = props;
  const [courseData, setCourseData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [max, setMax] = useState(0);
  const [price, setPrice] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [edit, setEdit] = useState(null);
  const [instructorCourses, setInstructorCourses] = useState(null);
  const [studentCourses, setStudentCourses] = useState(null);
  const [messageError, setMessageError] = useState("");
  const [messageSuccess, setMessageSuccess] = useState("");
  const [openDeleteStudent, setOpenDeleteStudent] = useState(false);
  const [save, setSave] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDeleteCourse, setOpenDeleteCourse] = useState(false);
  const [openSave, setOpenSave] = useState(false);
  const [openOne, setOpenOne] = useState(true);
  const [contin, setContin] = useState(false);
  const [editContin, setEditContin] = useState(false);
  const [continBtn, setContinBtn] = useState("");
  const history = useHistory();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value, "title");
  };

  const handleChangeDescription = (e) => {
    console.log("eeeee", e.target.value);
    setDescription(e.target.value);
    console.log(e.target.value, "descriotion");
  };
  const handleChangeMax = (e) => {
    setMax(e.target.value);
    console.log(e.target.value, "max");
  };
  const handleChangeDate = (e) => {
    console.log(e.target.value, "date");
    setStartDate(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
    console.log(e.target.value, "price");
  };

  const PopUpEdit = (e) => {
    // console.log(e.target.id, "e.target.id");
    setOpenEdit(true);
    setOpenDeleteCourse(false);
    setEdit(e.target.id);
    // setOpenSave(false);
  };

  const PopUpDeleteCourse = (e) => {
    setOpenDeleteCourse(true);
    setOpenEdit(false);
    setInstructorCourses(e.target.id);
  };
  const PopUpSave = (e) => {
    setOpenSave(true);
    setSave(e.target.id);
  };

  const PopUpDeleteStudentCourse = (e) => {
    console.log(e.target, "PopUpDeleteStudentCourse");
    setOpenDeleteStudent(true);
    setStudentCourses(e.target.id);
  };

  let PopUpError = () => {
    setMessageError("nonono");
    console.log("true");
  };

  const handleOpen = () => {
    setOpenDeleteStudent(true);
  };
  const handleClose = () => {
    setOpenDeleteStudent(false);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const handleCloseDelete = () => {
    setOpenDeleteCourse(false);
  };
  const handleCloseSave = () => {
    setOpenSave(false);
  };

  // const handleCloseOne = () => {
  //   setMessageOne(false);
  // };

  const handleContinue = (e) => {
    setOpenEdit(false);
    setContin(false);
    setEditContin(false);
    setContinBtn(e.target);
  };

  const handleDeleteStudentCourse = (e) => {
    console.log("handleDeleteStudent  Is Working ");
    // console.log(currentUser.user, "currentUser.user._id");
    console.log(e.target, "e.target.id");
    CourseService.deleteStudentCourse(e.target.id, currentUser.user)
      .then((data) => {
        // window.alert("Deleted");

        setMessageSuccess(data.data);
        setOpenDeleteStudent(false);
        console.log(data, "data");
        setContin(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteCourse = (e) => {
    console.log("handleDelete working ");
    // console.log(e.target.id, "id");
    CourseService.deleteCourse(e.target.id)
      .then((data) => {
        // console.log(data, "data");
        // window.alert("Deleted");
        // setOpen(true);
        setMessageSuccess(data.data);
        setOpenDeleteCourse(false);
        setContin(true);
        // history.go(0);
      })
      .catch((err) => {
        console.log(err);
        // setOpen(true);
      });
  };

  const handleEditCourse = (e) => {
    e.preventDefault();
    // console.log(e.target.id, "idid");

    CourseService.editCourse(e.target.id, title, description, max, price, startDate)
      .then((data) => {
        console.log(data, "datadata");
        // setMessageOne(data.data);
        // setOpenOne(true);
        // window.alert("New course has been created.");
        // history.push("/course1");
        setOpenSave(false);
        setMessageSuccess(data.data);
        setEditContin(true);
      })
      .catch((error) => {
        console.log(error.response, "error");
        // setMessage(error.response.data);
        // setOpen(true);
      });
  };

  useEffect(() => {
    console.log("Using effect");
    let _id;
    if (currentUser) {
      delete currentUser.user.password;
      delete currentUser.user.date;
      // console.log(currentUser.user, "dasdas");
      _id = currentUser.user;

      // console.log(_id, "id");
    } else {
      _id = "";
    }

    if (currentUser.user.role == "instructor") {
      CourseService.get(_id)
        .then((data) => {
          let edit = data.data;
          console.log(data, "data.data");
          setCourseData(data.data);
          setEditData(edit.students);
          console.log(edit, "edit");
          // edit.map((s) => {
          //   // let students = s.students;
          //   console.log(s.students, "s");
          //   s.students.map((x) => {
          //     setEditData(x);
          //     console.log(x.username, "x");
          //   });
          // });

          // setStudentData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (currentUser.user.role == "student") {
      CourseService.getEnrolledCourses(_id)
        .then((data) => {
          console.log(data.data, "datadata");
          setCourseData(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [continBtn, editContin]);

  return (
    <Container>
      {currentUser && currentUser.user.role == "instructor" && (
        <div>
          <H1>Instructor's Course page</H1>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div>
          <H1>Student's Course page</H1>
        </div>
      )}
      {currentUser && courseData && Array.isArray(courseData) && (
        <DivWrapper1>
          <DivWrapper2>
            {courseData.map((course) => (
              <CourseWrapper>
                <CourseWrap id={course._id}>
                  {/* <CourseRow> */}
                  {!openEdit && (
                    <div>
                      <CourseH5>{course.title}</CourseH5>
                      <CourseP>{course.description}</CourseP>
                      <CourseP>
                        Student Count: {course.students.length}/{course.max}
                      </CourseP>
                      <CourseP>Price: ${course.price}</CourseP>
                      <CourseP>Start: {course.startDate}</CourseP>
                    </div>
                  )}
                  {currentUser.user.role == "student" && (
                    <div>
                      <CourseP>
                        Instructor:{" "}
                        <Link to={`/instructorprofile/${course.instructor._id}`}>
                          {course.instructor.username}{" "}
                        </Link>
                      </CourseP>

                      <CourseBtn onClick={PopUpDeleteStudentCourse} id={course._id}>
                        <AiFillDelete />
                        Delete
                      </CourseBtn>
                    </div>
                  )}
                  {openEdit && edit !== course._id && (
                    <div>
                      <CourseH5>{course.title}</CourseH5>
                      <CourseP>{course.description}</CourseP>
                      <CourseP>
                        Student Count: {course.students.length}/{course.max}
                      </CourseP>
                      <CourseP>Price: ${course.price}</CourseP>
                      <CourseP>Start: {course.startDate}</CourseP>
                    </div>
                  )}

                  {openEdit && edit === course._id && (
                    <EditWrapper>
                      <EditInputH5
                        name="title"
                        type="text"
                        id="exampleforTitle"
                        defaultValue={course.title}
                        onChange={handleChangeTitle}
                      ></EditInputH5>
                      <EditInput
                        id="exampleforContent"
                        aria-describedby="emailHelp"
                        name="content"
                        defaultValue={course.description}
                        onChange={handleChangeDescription}
                      ></EditInput>

                      <EditInput
                        name="max"
                        type="number"
                        defaultValue={course.max}
                        onChange={handleChangeMax}
                      ></EditInput>
                      <EditDateWrap>
                        {/* <EditLabel>StartDate</EditLabel> */}
                        <EditDate
                          type="date"
                          id="datefield"
                          min="2021-10-20"
                          max="2022-13-13"
                          defaultValue={course.startDate}
                          onChange={handleChangeDate}
                          required
                        ></EditDate>
                        {/* <EditLabel>EndDate</EditLabel> */}
                        <EditDate
                          type="date"
                          id="datefield"
                          min="2021-10-20"
                          max="2022-13-13"
                          defaultValue={course.startDate}
                          onChange={handleChangeDate}
                          required
                        ></EditDate>
                      </EditDateWrap>
                      {/* <EditLabel>Price</EditLabel> */}
                      <EditInput
                        name="price"
                        type="number"
                        id="exampleforPrice"
                        defaultValue={course.price}
                        onChange={handleChangePrice}
                        placeholder="$"
                      ></EditInput>
                    </EditWrapper>
                  )}
                  {!openEdit && currentUser.user.role == "instructor" && (
                    <CourseBtn3 onClick={PopUpDeleteCourse} id={course._id}>
                      <AiFillDelete />
                      Delete
                    </CourseBtn3>
                  )}

                  {!openEdit &&
                    course.students.length === 0 &&
                    currentUser.user.role == "instructor" && (
                      <CourseBtn1 onClick={PopUpEdit} id={course._id}>
                        <AiFillEdit />
                        Edit
                      </CourseBtn1>
                    )}

                  {openEdit && edit !== course._id && currentUser.user.role == "instructor" && (
                    <CourseBtn3 onClick={PopUpDeleteCourse} id={course._id}>
                      <AiFillDelete />
                      Delete
                    </CourseBtn3>
                  )}
                  {openEdit &&
                    edit !== course._id &&
                    course.students.length === 0 &&
                    currentUser.user.role == "instructor" && (
                      <CourseBtn1 onClick={PopUpEdit} id={course._id}>
                        <AiFillEdit />
                        Edit
                      </CourseBtn1>
                    )}
                  {openEdit && edit === course._id && currentUser.user.role == "instructor" && (
                    <div>
                      <CourseBtn2 onClick={handleCloseEdit} id={course._id}>
                        {/* <ImCancelCircle /> */}
                        Cancel
                      </CourseBtn2>
                      <CourseBtn2 onClick={PopUpSave} id={course._id}>
                        <BsSave2 />
                        Save
                      </CourseBtn2>
                    </div>
                  )}
                </CourseWrap>
              </CourseWrapper>
            ))}
          </DivWrapper2>

          {openSave && (
            <PopUpBackground>
              <PopUpContainer>
                <PopUpTitle>
                  <PopUpH1> Save</PopUpH1>
                </PopUpTitle>
                <PopUpP>Are You Sure To Save?</PopUpP>
                <PopUpBtn1 onClick={handleCloseSave}>Cancel</PopUpBtn1>
                <PopUpBtn2 onClick={handleEditCourse} id={save}>
                  Save
                </PopUpBtn2>
              </PopUpContainer>
            </PopUpBackground>
          )}
          {openDeleteCourse && (
            <PopUpBackground>
              <PopUpContainer>
                <PopUpTitle>
                  <PopUpH1> Delete</PopUpH1>
                </PopUpTitle>
                <PopUpP>Are You Sure To Delete?</PopUpP>
                <PopUpBtn1 onClick={handleCloseDelete}>Cancel</PopUpBtn1>
                <PopUpBtn2 onClick={handleDeleteCourse} id={instructorCourses}>
                  Delete
                </PopUpBtn2>
              </PopUpContainer>
            </PopUpBackground>
          )}

          {/* {messageSuccess && contin && (
            <MsgWrap>
              <MsgDivOne>
                <MsgIcon>
                  <MdOutlineDone />
                  <MsgH1>Success !</MsgH1>
                </MsgIcon>
                <MsgP>{messageSuccess}</MsgP>

                <MsgBtn2 onClick={handleContinue}>Continue</MsgBtn2>
              </MsgDivOne>
            </MsgWrap>
          )} */}

          {/* </CoursePwrap> */}
          {/* </DivWrapper3> */}
          {/* {open && studentCourses === course._id && ( */}
          {openDeleteStudent && (
            <PopUpBackground>
              <PopUpContainer>
                <PopUpTitle>
                  <PopUpH1> Delete</PopUpH1>
                </PopUpTitle>
                <PopUpP>Are You Sure To Delete?</PopUpP>

                <PopUpBtn1 onClick={handleClose}>Cancel</PopUpBtn1>
                <PopUpBtn2 onClick={handleDeleteStudentCourse} id={studentCourses}>
                  Delete
                </PopUpBtn2>
              </PopUpContainer>
            </PopUpBackground>
          )}
          {/* {messageSuccess && studentCourses === course._id && contin && ( */}
          {messageSuccess && contin && (
            <MsgWrap>
              <MsgDivOne>
                <MsgIcon>
                  <MdOutlineDone />
                  <MsgH1>Success !</MsgH1>
                </MsgIcon>
                <MsgP>{messageSuccess}</MsgP>
                <MsgBtn2 onClick={handleContinue}>Continue</MsgBtn2>
              </MsgDivOne>
            </MsgWrap>
          )}
          {messageSuccess && editContin && (
            // <MsgContainer>
            <MsgWrap>
              <MsgDivOne>
                <MsgIcon>
                  <MdOutlineDone />
                  <MsgH1>Success !</MsgH1>
                </MsgIcon>
                <MsgP>{messageSuccess}</MsgP>
                {/* <MsgBtn onClick={handleCloseOne}>x</MsgBtn> */}
                {/* <MsgBtnDiv> */}
                {/* <MsgBtn1 onClick={handleAgain}>Post Course Again</MsgBtn1> */}
                <MsgBtn2 onClick={handleContinue}>Continue</MsgBtn2>

                {/* </MsgBtnDiv> */}
              </MsgDivOne>
            </MsgWrap>
            // </MsgContainer>
          )}
        </DivWrapper1>
      )}
    </Container>
  );
};

export default Course;

import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { ImWarning } from "react-icons/im";
import { MdOutlineDone } from "react-icons/md";
// import Course from "../server/models/course-model";
import CourseService from "../../services/course.service";

import {
  Container,
  PopUpBackground,
  PopUpContainer,
  PopUpCloseBtn,
  PopUpCloseBtn1,
  PopUpTitle,
  PopUpH1,
  PopUpFooter,
  PopUpBtn,
  CourseWrapper,
  CourseWrap,
  CourseRow,
  CourseH5,
  CourseP,
  CourseBtn,
  CoursePwrap,
  PostCourseContent,
  PostCourseForm,
  PostCourseH1,
  PostCourseLabel,
  PostCourseInput,
  PostCourseText,
  PostCourseDateWrap,
  PostCourseDate,
  PostCourseBtn,
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
} from "./CourseElement";
import { connect } from "mongoose";

const Course = (props) => {
  let { currentUser, setCurrentUser } = props;
  let [courseData, setCourseData] = useState(null);
  let [editData, setEditData] = useState(null);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [max, setMax] = useState(0);
  let [price, setPrice] = useState(0);
  let [startDate, setStartDate] = useState("");
  let [edit, setEdit] = useState(null);
  let [instructorCourses, setInstructorCourses] = useState(null);
  let [studentCourses, setStudentCourses] = useState(null);
  let [messageError, setMessageError] = useState("");
  let [messageSuccess, setMessageSuccess] = useState("");
  let [open, setOpen] = useState(false);
  let [openEdit, setOpenEdit] = useState(false);
  let [openDelete, setOpenDelete] = useState(false);
  let [openOne, setOpenOne] = useState(true);
  let [contin, setContin] = useState(null);
  const history = useHistory();

  // const handleTakeToLogin = () => {
  //   history.push("/login");
  // };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value, "title");
  };

  const handleChangeDescription = (e) => {
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
    setOpenEdit(true);
    setEdit(e.target.id);
  };

  const PopUpDeleteCourse = (e) => {
    setOpenDelete(true);
    setInstructorCourses(e.target.id);
  };
  const PopUpDeleteStudentCourse = (e) => {
    setOpen(true);
    setStudentCourses(e.target.id);
  };

  let PopUpError = () => {
    setMessageError("nonono");
    console.log("true");
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  // const handleCloseOne = () => {
  //   setMessageOne(false);
  // };

  const handleContinue = () => {
    setContin(history.go(0));
  };

  let true1 = true;

  const handleDeleteStudentCourse = (e) => {
    console.log("handleDeleteStudent  Is Working ");
    // console.log(currentUser.user, "currentUser.user._id");
    // console.log(e.target, "e.target.id");
    CourseService.deleteStudentCourse(e.target.id, currentUser.user)
      .then((data) => {
        // window.alert("Deleted");
        setMessageSuccess(data.data);
        setOpen(false);
        console.log(data, "data");

        // history.go(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    console.log("handleDelete working ");
    // console.log(e.target.id, "id");
    CourseService.deleteCourse(e.target.id)
      .then((data) => {
        // console.log(data, "data");
        // window.alert("Deleted");
        // setOpen(true);
        setMessageSuccess(data.data);
        setOpenDelete(false);
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
          edit.map((s) => {
            // let students = s.students;
            console.log(s.students, "s");
            s.students.map((x) => {
              setEditData(x);
              console.log(x.username, "x");
            });
          });

          // setStudentData(data.data);
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
          console.log(data.data, "datadata");
          setCourseData(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <Container>
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
        <CourseWrapper>
          {courseData.map((course) => (
            <CourseWrap id={course._id}>
              <CourseRow>
                <CourseH5>{course.title}</CourseH5>
                {/* <CoursePwrap> */}

                {currentUser && currentUser.user.role == "student" && (
                  <Link to={`/instructorprofile/${course.instructor._id}`}>
                    <CourseP>Instructor: {course.instructor.username}</CourseP>
                  </Link>
                )}
                <CourseP>{course.description}</CourseP>
                <CourseP>
                  Student Count: {course.students.length}/{course.max}
                </CourseP>
                {currentUser && currentUser.user.role == "instructor" && (
                  <CourseP>
                    {course.students.map((k) => {
                      <CourseP>Students:{k.username}</CourseP>;
                    })}
                  </CourseP>
                )}
                <CourseP>Price: ${course.price}</CourseP>
                <CourseP>Start: {course.startDate}</CourseP>
                {/* <CourseP>Student Delete</CourseP> */}
                {currentUser && currentUser.user.role == "student" && (
                  <CourseBtn onClick={PopUpDeleteStudentCourse} id={course._id}>
                    <AiFillDelete />
                    delete
                  </CourseBtn>
                )}
                {currentUser && currentUser.user.role == "instructor" && (
                  <CourseBtn onClick={PopUpDeleteCourse} id={course._id}>
                    {/* <AiFillDelete /> */}
                    delete
                  </CourseBtn>
                )}
                {currentUser && currentUser.user.role == "instructor" && (
                  <CourseBtn onClick={PopUpEdit} id={course._id}>
                    Edit
                  </CourseBtn>
                )}
                {/* {course.students.length >= 1 ? PopUpError : true1} */}
                {edit === course._id && course.students.length > 0 && openEdit && (
                  // <MsgContainer>
                  <MsgWrap>
                    <MsgDiv>
                      <MsgBtn onClick={handleCloseEdit}>x</MsgBtn>
                      <MsgIcon>
                        <ImWarning />
                        <MsgH1>Error !</MsgH1>
                      </MsgIcon>
                      <MsgP>Student are not 0 </MsgP>
                    </MsgDiv>
                  </MsgWrap>
                  // </MsgContainer>
                )}
                {course.students.length > 0 && openDelete && instructorCourses === course._id && (
                  // <MsgContainer>
                  <MsgWrap>
                    <MsgDiv>
                      <MsgBtn onClick={handleCloseDelete}>x</MsgBtn>
                      <MsgIcon>
                        <ImWarning />
                        <MsgH1>Error !</MsgH1>
                      </MsgIcon>
                      <MsgP>Student need to be 0 </MsgP>
                    </MsgDiv>
                  </MsgWrap>
                  // </MsgContainer>
                )}
                {openEdit &&
                  edit === course._id &&
                  course.students.length === 0 &&
                  currentUser &&
                  currentUser.user.role == "instructor" && (
                    <PostCourseContent>
                      {/* {courseData.map((course) => ( */}
                      <PostCourseContent>
                        {currentUser && currentUser.user.role == "instructor" && (
                          <PostCourseForm>
                            <PostCourseH1 onClick={handleClose}>Post Course</PostCourseH1>
                            <PostCourseLabel for="exampleforTitle">Title</PostCourseLabel>
                            <PostCourseInput
                              name="title"
                              type="text"
                              id="exampleforTitle"
                              defaultValue={course.title}
                              onChange={handleChangeTitle}
                            ></PostCourseInput>
                            <PostCourseLabel for="exampleforContent">Content</PostCourseLabel>
                            <PostCourseText
                              id="exampleforContent"
                              aria-describedby="emailHelp"
                              name="content"
                              defaultValue={course.description}
                              onChange={handleChangeDescription}
                            ></PostCourseText>
                            <PostCourseLabel>max</PostCourseLabel>
                            <PostCourseInput
                              name="max"
                              type="number"
                              defaultValue={course.max}
                              onChange={handleChangeMax}
                            ></PostCourseInput>
                            <PostCourseDateWrap>
                              <PostCourseDate>
                                <PostCourseLabel>Start</PostCourseLabel>
                                <PostCourseInput
                                  type="date"
                                  id="datefield"
                                  min="2021-10-20"
                                  max="2022-13-13"
                                  defaultValue={course.startDate}
                                  onChange={handleChangeDate}
                                  required
                                ></PostCourseInput>
                              </PostCourseDate>
                              <PostCourseDate>
                                <PostCourseLabel>End</PostCourseLabel>
                                <PostCourseInput type="date"></PostCourseInput>
                              </PostCourseDate>
                            </PostCourseDateWrap>
                            <PostCourseLabel for="exampleforPrice">Price</PostCourseLabel>
                            <PostCourseInput
                              name="price"
                              type="number"
                              // className="form-control"
                              id="exampleforPrice"
                              defaultValue={course.price}
                              onChange={handleChangePrice}
                              placeholder="$"
                            ></PostCourseInput>
                            <PostCourseBtn onClick={handleEditCourse} id={course._id}>
                              Save
                            </PostCourseBtn>
                            {/* <span onClick={handleClose}>x</span> */}
                          </PostCourseForm>
                        )}
                      </PostCourseContent>
                      {/* ))} */}
                    </PostCourseContent>
                  )}

                {openDelete && instructorCourses === course._id && course.students.length === 0 && (
                  <PopUpBackground>
                    <PopUpContainer>
                      <PopUpCloseBtn>
                        <PopUpCloseBtn1 onClick={handleCloseDelete}>x</PopUpCloseBtn1>
                      </PopUpCloseBtn>
                      <PopUpTitle>
                        <PopUpH1>Are You Sure To Delete ?</PopUpH1>
                      </PopUpTitle>
                      <PopUpFooter>
                        <PopUpBtn onClick={handleCloseDelete}>Cancel</PopUpBtn>
                        <PopUpBtn onClick={handleDelete} id={course._id}>
                          Delete
                        </PopUpBtn>
                      </PopUpFooter>
                    </PopUpContainer>
                  </PopUpBackground>
                )}
                {messageSuccess && instructorCourses === course._id && (
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
                {open && studentCourses === course._id && (
                  <PopUpBackground>
                    <PopUpContainer>
                      <PopUpCloseBtn>
                        <PopUpCloseBtn1 onClick={handleClose}>x</PopUpCloseBtn1>
                      </PopUpCloseBtn>
                      <PopUpTitle>
                        <PopUpH1>Are You Sure To Delete ?</PopUpH1>
                      </PopUpTitle>
                      <PopUpFooter>
                        <PopUpBtn onClick={handleClose}>Cancel</PopUpBtn>
                        <PopUpBtn onClick={handleDeleteStudentCourse} id={course._id}>
                          Delete
                        </PopUpBtn>
                      </PopUpFooter>
                    </PopUpContainer>
                  </PopUpBackground>
                )}
                {messageSuccess && studentCourses === course._id && (
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
                {/* </CoursePwrap> */}
              </CourseRow>
            </CourseWrap>
          ))}
        </CourseWrapper>
      )}
    </Container>
  );
};

export default Course;

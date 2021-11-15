import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { ImWarning } from "react-icons/im";
import { MdOutlineDone } from "react-icons/md";
// import Course from "../server/models/course-model";
import CourseService from "../../services/course.service";

import {
  Container,
  DivWrapper1,
  DivWrapper2,
  DivWrapper3,
  CourseWrapper,
  CourseWrap,
  CourseRow,
  CourseH5,
  CourseP,
  CourseBtn,
  CoursePwrap,
  EditWrapper,
  EditLabel,
  EditInputH5,
  EditInput,
  EditText,
  EditDateWrap,
  EditDate,
  // PostCourseContent,
  // PostCourseForm,
  // PostCourseH1,
  // PostCourseLabel,
  // PostCourseInput,
  // PostCourseText,
  // PostCourseDateWrap,
  // PostCourseDate,
  // PostCourseBtn,
  PopUpBackground,
  PopUpContainer,
  PopUpCloseBtn,
  PopUpCloseBtn1,
  PopUpTitle,
  PopUpH1,
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
  let [save, setSave] = useState(false);
  let [openEdit, setOpenEdit] = useState(false);
  let [openDelete, setOpenDelete] = useState(false);
  let [openSave, setOpenSave] = useState(false);
  let [openOne, setOpenOne] = useState(true);
  let [contin, setContin] = useState(false);
  let [editContin, setEditContin] = useState(false);
  let [continBtn, setContinBtn] = useState("");
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
    // console.log(e.target.id, "e.target.id");
    setOpenEdit(true);
    setOpenDelete(false);
    setEdit(e.target.id);
    // setOpenSave(false);
  };

  const PopUpDeleteCourse = (e) => {
    setOpenDelete(true);
    setOpenEdit(false);
    setInstructorCourses(e.target.id);
  };
  const PopUpSave = (e) => {
    setOpenSave(true);
    setSave(e.target.id);
  };

  const PopUpDeleteStudentCourse = (e) => {
    console.log(e.target, "PopUpDeleteStudentCourse");
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
        setOpen(false);
        console.log(data, "data");
        setContin(true);
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
  }, [continBtn, editContin]);

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
        <DivWrapper1>
          <DivWrapper2>
            {courseData.map((course) => (
              <CourseWrapper>
                <CourseWrap id={course._id}>
                  {/* <CourseRow> */}
                  {!openEdit && <CourseH5>{course.title}</CourseH5>}
                  {openEdit && edit !== course._id && <CourseH5>{course.title}</CourseH5>}
                  {openEdit && edit === course._id && (
                    <EditInputH5
                      name="title"
                      type="text"
                      id="exampleforTitle"
                      defaultValue={course.title}
                      onChange={handleChangeTitle}
                    ></EditInputH5>
                  )}
                  {currentUser && currentUser.user.role == "student" && (
                    <Link to={`/instructorprofile/${course.instructor._id}`}>
                      <CourseP>Instructor: {course.instructor.username}</CourseP>
                    </Link>
                  )}
                  {!openEdit && <CourseP>{course.description}</CourseP>}
                  {openEdit && edit !== course._id && <CourseP>{course.description}</CourseP>}
                  {!openEdit && (
                    <CourseP>
                      Student Count: {course.students.length}/{course.max}
                    </CourseP>
                  )}
                  {openEdit && edit !== course._id && (
                    <CourseP>
                      Student Count: {course.students.length}/{course.max}
                    </CourseP>
                  )}
                  {/* {currentUser && currentUser.user.role == "instructor" && (
                  <CourseP>
                    {course.students.map((k) => {
                      <CourseP>Students:{k.username}</CourseP>;
                    })}
                  </CourseP>
                )} */}

                  {!openEdit && <CourseP>Price: ${course.price}</CourseP>}
                  {openEdit && edit !== course._id && <CourseP>Price: ${course.price}</CourseP>}
                  {!openEdit && <CourseP>Start: {course.startDate}</CourseP>}
                  {openEdit && edit !== course._id && <CourseP>Start: {course.startDate}</CourseP>}

                  {openEdit && edit === course._id && (
                    <EditWrapper>
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
                  {/* <CourseP>Student Delete</CourseP> */}
                  {currentUser && currentUser.user.role == "student" && (
                    <CourseBtn onClick={PopUpDeleteStudentCourse} id={course._id}>
                      <AiFillDelete />
                      delete
                    </CourseBtn>
                  )}
                  {!openEdit && currentUser && currentUser.user.role == "instructor" && (
                    <CourseBtn onClick={PopUpDeleteCourse} id={course._id}>
                      {/* <AiFillDelete /> */}
                      delete
                    </CourseBtn>
                  )}

                  {!openEdit &&
                    course.students.length === 0 &&
                    currentUser &&
                    currentUser.user.role == "instructor" && (
                      <CourseBtn onClick={PopUpEdit} id={course._id}>
                        Edit
                      </CourseBtn>
                    )}

                  {/* {edit === course._id && course.students.length > 0 && openEdit && (
                    <MsgWrap>hihi</MsgWrap>
                  )} */}

                  {openEdit &&
                    edit !== course._id &&
                    currentUser &&
                    currentUser.user.role == "instructor" && (
                      <CourseBtn onClick={PopUpDeleteCourse} id={course._id}>
                        {/* <AiFillDelete /> */}
                        delete
                      </CourseBtn>
                    )}
                  {openEdit &&
                    edit !== course._id &&
                    course.students.length === 0 &&
                    currentUser &&
                    currentUser.user.role == "instructor" && (
                      <CourseBtn onClick={PopUpEdit} id={course._id}>
                        Edit
                      </CourseBtn>
                    )}
                  {openEdit &&
                    edit === course._id &&
                    currentUser &&
                    currentUser.user.role == "instructor" && (
                      <CourseBtn onClick={handleCloseEdit} id={course._id}>
                        {/* <AiFillDelete /> */}
                        Cancel
                      </CourseBtn>
                    )}
                  {openEdit &&
                    edit === course._id &&
                    currentUser &&
                    currentUser.user.role == "instructor" && (
                      <CourseBtn onClick={PopUpSave} id={course._id}>
                        Save
                      </CourseBtn>
                    )}
                  {/* </CourseRow> */}
                </CourseWrap>
              </CourseWrapper>
            ))}
          </DivWrapper2>

          {/* <DivWrapper3> */}
          {/* {edit && course.students.length > 0 && openEdit && (
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
          )} */}

          {/* {course.students.length > 0 && openDelete && instructorCourses && (
            
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
            
          )} */}

          {openSave && (
            <PopUpBackground>
              <PopUpContainer>
                <PopUpCloseBtn>
                  <PopUpCloseBtn1 onClick={handleCloseSave}>x</PopUpCloseBtn1>
                </PopUpCloseBtn>
                <PopUpTitle>
                  <PopUpH1>Are You Sure To Save ?</PopUpH1>
                </PopUpTitle>
                <PopUpFooter>
                  <PopUpBtn onClick={handleCloseSave}>Cancel</PopUpBtn>
                  <PopUpBtn onClick={handleEditCourse} id={save}>
                    Save
                  </PopUpBtn>
                </PopUpFooter>
              </PopUpContainer>
            </PopUpBackground>
          )}
          {openDelete && (
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
                  <PopUpBtn onClick={handleDelete} id={instructorCourses}>
                    Delete
                  </PopUpBtn>
                </PopUpFooter>
              </PopUpContainer>
            </PopUpBackground>
          )}

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

          {/* </CoursePwrap> */}
          {/* </DivWrapper3> */}
          {/* {open && studentCourses === course._id && ( */}
          {open && (
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
                  <PopUpBtn onClick={handleDeleteStudentCourse} id={studentCourses}>
                    Delete
                  </PopUpBtn>
                </PopUpFooter>
              </PopUpContainer>
            </PopUpBackground>
          )}
          {/* {messageSuccess && studentCourses === course._id && contin && ( */}
          {messageSuccess && contin && (
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

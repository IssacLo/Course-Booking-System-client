import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrAddCircle } from "react-icons/gr";
import { ImWarning } from "react-icons/im";
import { MdOutlineDone } from "react-icons/md";
import { BiRightArrowCircle } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import CourseService from "../../services/course.service";
// import axios from "axios";

import {
  MsgDiv,
  MsgDivOne,
  // MsgContainer,
  MsgIcon,
  MsgH1,
  MsgBtn,
  MsgBtn1,
  Container,
  SearchWrap,
  Search,
  SearchInput,
  SearchBtn,
  EnrollH1,
  EnrollWrapper,
  EnrollWrap,
  EnrollPWrap,
  EnrollRow,
  EnrollBtn,
  EnrollH5,
  EnrollP,
  Icon,
} from "./EnrollElement";

const Enroll = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  let [searchInput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState(null);
  let [message, setMessage] = useState("");
  let [messageOne, setMessageOne] = useState("");
  let [courseData, setCourseData] = useState(null);
  let [studentData, setStudentData] = useState();
  let [open, setOpen] = useState(true);
  let [openOne, setOpenOne] = useState(true);
  let [contin, setContin] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseOne = () => {
    setOpenOne(false);
  };

  const handleContinue = () => {
    setContin(history.push("/course1"));
  };

  const handleTakeToLogin = () => {
    history.push("/singin");
  };

  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  // const handleSearch = (e) => {
  //   console.log(e, "e");
  //   e.preventDefault();

  // CourseService.getCourseByName(searchInput)
  //   .then((data) => {
  //     console.log(data);
  //     history.go(0);
  //     setSearchResult(data.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // };

  const handleEnroll = (e) => {
    console.log(currentUser.user, "currentUser.user._id");

    // console.log(newUser, "handleenroll working ");
    console.log(e.target.id, "123");
    delete currentUser.user.password;
    delete currentUser.user.date;
    // console.log(currentUser_passworddeleted, "newUser");
    // console.log(currentUser.user, "123");

    CourseService.enroll(e.target.id, currentUser.user)
      .then((data) => {
        console.log(data.data);
        setMessageOne(data.data);
        setOpenOne(true);
        // console.log(setMessage(data.data), "data");
        // window.alert("Done Enrollment");
        // history.push("/course1");
      })
      .catch((err) => {
        console.log(err.response.data, "errrrrr");
        setMessage(err.response.data);

        setOpen(true);
      });
  };

  useEffect(() => {
    console.log("Using effect");
    delete currentUser.user.password;
    delete currentUser.user.date;
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
      // console.log(currentUser.user, "ididididididid");
    } else {
      _id = "";
    }

    if (currentUser.user.role == "student") {
      CourseService.getAllCourses(_id)
        .then((data) => {
          let student_id = data.data;
          // console.log(student_id, "student_id");
          student_id.map((s) => {
            // console.log(s.students, "s");
            s.students.map((id) => {
              console.log(id, "id");
              console.log("=======");
              setStudentData(id);
            });
            // console.log(s, "s");
          });
          // console.log(data.data, "data");
          setCourseData(data.data);
        })
        .catch((error) => {
          console.log(error);
          setMessage(error.response.data);
        });
    }
  }, []);
  return (
    <Container>
      {/* {!currentUser && ( */}
      {/* <MsgDiv>
        <MsgP>You must login first before searching for courses.</MsgP>
        <MsgBtn></MsgBtn>
      </MsgDiv> */}
      {/* )} */}
      {/* <CourseH1>Welcome to student's course page</CourseH1> */}
      {/* {currentUser && currentUser.user.role == "instructor" && ( */}
      {/* <InstructorDiv>
        <InstructorH1>
        Only students can enroll in courses.
        </InstructorH1>
      </InstructorDiv> */}
      {/* )} */}

      {message && open && (
        // <MsgContainer>
        <MsgDiv>
          <MsgIcon>
            <ImWarning />
          </MsgIcon>
          <MsgH1>Error!</MsgH1>
          <MsgBtn onClick={handleClose}>x</MsgBtn>
          {message}
        </MsgDiv>
        // </MsgContainer>
      )}

      {messageOne && openOne && (
        // <MsgContainer>
        <MsgDivOne>
          <MsgIcon>
            <MdOutlineDone />
          </MsgIcon>
          <MsgH1>Success!</MsgH1>
          {messageOne}
          <MsgBtn onClick={handleCloseOne}>x</MsgBtn>
          <MsgBtn1 onClick={handleContinue}>Continue</MsgBtn1>
        </MsgDivOne>
        // </MsgContainer>
      )}

      {currentUser && currentUser.user.role == "student" && (
        <SearchWrap>
          <Search>
            <SearchInput onChange={handleChangeInput} type="text" placeholder="Search..." />
            {/* <SearchBtn onClick={handleSearch}>
              <FiSearch />
            </SearchBtn> */}
          </Search>
        </SearchWrap>
      )}
      {currentUser && courseData && courseData.length != 0 && (
        <EnrollWrapper>
          {courseData
            .filter((course) => {
              if (searchInput == "") {
                return course;
              } else if (course.title.toLowerCase().includes(searchInput.toLowerCase())) {
                return course;
              }
            })
            .map((course) => (
              <EnrollWrap id={course._id}>
                {/* <EnrollRow background={studentData === currentUser.user}> */}
                <EnrollRow>
                  <EnrollH5>{course.title}</EnrollH5>
                  <EnrollPWrap>
                    <EnrollP>{course.description}</EnrollP>

                    <EnrollP>
                      Instructor:{" "}
                      <Link to={`/instructorprofile/${course.instructor._id}`}>
                        {course.instructor.username}
                      </Link>{" "}
                    </EnrollP>

                    <EnrollP>
                      Student Count: {course.students.length}/{course.max}
                    </EnrollP>
                    <EnrollP>Price: ${course.price}</EnrollP>
                    <EnrollP>Stat Date: {course.startDate}</EnrollP>
                  </EnrollPWrap>
                  {currentUser && currentUser.user.role == "student" && (
                    <EnrollBtn onClick={handleEnroll} id={course._id}>
                      enroll
                      <Icon>
                        <BiRightArrowCircle />
                      </Icon>
                    </EnrollBtn>
                  )}
                </EnrollRow>
              </EnrollWrap>
            ))}
        </EnrollWrapper>
      )}

      {/* {currentUser && searchResult && searchResult.length != 0 && (
        <EnrollWrapper>
          {searchResult.map((course) => (
            <EnrollWrap key={course._id}>
              <EnrollRow>
                <EnrollH5>{course.title}</EnrollH5>
                <EnrollP>Instructor: {course.instructor.username}</EnrollP>
                <EnrollP>{course.description}</EnrollP>
                <EnrollP>Student Count: {course.students.length}</EnrollP>
                <EnrollP>Price: ${course.price}</EnrollP>
                <EnrollBtn onClick={handleEnroll} id={course._id}>
                  <GrAddCircle />
                </EnrollBtn>
              </EnrollRow>
            </EnrollWrap>
          ))}
        </EnrollWrapper>
      )} */}
    </Container>
  );
};

export default Enroll;

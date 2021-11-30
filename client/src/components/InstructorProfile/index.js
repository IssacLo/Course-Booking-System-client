import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CourseService from "../../services/course.service";

import {
  Container,
  ProfileWrap,
  ProfileH1,
  ProfileH3,
  ProfilePWrap,
  ProfileAlert,
  ProfileBtn,
  ProfileP,
  ProfileP1,
  ProfileStrong,
  CourseWrapper,
  CourseWrap,
  CourseRow,
  CourseH5,
  CourseP,
} from "./InstructorProfileElement";

const InstructorProfile = (props) => {
  let { currentUser, setCurrentUser } = props;
  let [courseData, setCourseData] = useState(null);
  let [instructorData, setInstructorData] = useState("");

  useEffect(() => {
    console.log("Using effect");
    let _id;
    let instructor_id = window.location.pathname.split("/", 3).slice(2);
    // console.log(instructor_id, "_id");
    if (currentUser) {
      delete currentUser.user.password;
      delete currentUser.user.date;
      // console.log(currentUser.user, "dasdas");
      _id = currentUser.user;
      // console.log(_id, "id");
    } else {
      _id = "";
    }
    // if (currentUser.user.role == "instructor") {
    CourseService.getInstructor(_id, instructor_id)
      .then((data) => {
        console.log(data.data, "data");
        let instructor = data.data;
        instructor.map((d) => {
          setInstructorData(d.instructor);
          // console.log(d.instructor, "sfsdfdsf");
        });

        setCourseData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  }, []);

  return (
    <Container>
      <ProfileWrap>
        <ProfileH1>
          <ProfileStrong>Instructor {instructorData.username} Profile Page</ProfileStrong>
        </ProfileH1>

        <ProfilePWrap>
          <ProfileP>Email: {instructorData.email}</ProfileP>
        </ProfilePWrap>
      </ProfileWrap>

      {currentUser && courseData && courseData.length != 0 && (
        <CourseWrapper>
          {courseData.map((course) => (
            <CourseWrap id={course._id}>
              <CourseRow>
                <CourseH5>{course.title}</CourseH5>
                {/* <CoursePwrap> */}
                <CourseP>{course.description}</CourseP>
                <CourseP>
                  Student Count: {course.students.length}/{course.max}
                </CourseP>

                <CourseP>Price: ${course.price}</CourseP>
                <CourseP>Start: {course.startDate}</CourseP>
                {/* <CourseP>Student Delete</CourseP> */}
                {/* {currentUser && currentUser.user.role == "student" && (
                  <CourseBtn onClick={PopUpDeleteStudentCourse} id={course._id}>
                    <AiFillDelete />
                    delete
                  </CourseBtn>
                )} */}

                {/* </CoursePwrap> */}
              </CourseRow>
            </CourseWrap>
          ))}
        </CourseWrapper>
      )}
    </Container>
  );
};

export default InstructorProfile;

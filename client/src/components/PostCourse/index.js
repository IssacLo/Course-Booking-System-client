import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ImWarning } from "react-icons/im";
import { MdOutlineDone } from "react-icons/md";
import CourseService from "../../services/course.service";
// import DateRangePicker from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

import {
  Container,
  TakeToLogin,
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
  PostCourseWrap,
  PostCourseContent,
  PostCourseForm,
  PostCourseH1,
  PostCourseLabel,
  PostCourseInput,
  PostCourseText,
  PostCourseDateWrap,
  PostCourseDate,
  PostCourseBtn,
} from "./PostCourseElement";

const PostCourse = (props) => {
  let { currentUser, setCurrentUser } = props;
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [max, setMax] = useState(0);
  let [price, setPrice] = useState(0);
  let [startDate, setStartDate] = useState("");
  let [messageError, setMessageError] = useState("");
  let [messageSuccess, setMessageSuccess] = useState("");
  let [open, setOpen] = useState(true);
  let [openOne, setOpenOne] = useState(true);
  let [contin, setContin] = useState(null);
  let [again, setAgain] = useState(null);

  const history = useHistory();

  const handleTakeToLogin = () => {
    history.push("/signin");
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeMax = (e) => {
    setMax(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseOne = () => {
    setOpenOne(false);
  };
  const handleContinue = () => {
    setContin(history.push("/course1"));
  };
  const handleAgain = () => {
    setAgain(history.go(0));
  };

  const handleChangeDate = (e) => {
    console.log(e.target.value);
    setStartDate(e.target.value);
  };
  const postCourse = (e) => {
    e.preventDefault();
    CourseService.post(title, description, max, price, startDate)
      .then((data) => {
        console.log(data.data, "datadata");
        setMessageSuccess(data.data);
        // setOpenOne(true);
        // window.alert("New course has been created.");
        // history.push("/course1");
      })
      .catch((error) => {
        console.log(error.response);
        setMessageError(error.response.data);
        setOpen(true);
      });
  };

  return (
    <>
      <Container>
        {/* {!currentUser && (
          <TakeToLogin>
            <p>You must login first before posting a new course.</p>
            <button className="btn btn-primary btn-lg" onClick={handleTakeToLogin}>
              Take me to signin page.
            </button>
          </TakeToLogin>
        )}
        {currentUser && currentUser.user.role !== "instructor" && (
          <div>
            <p>Only instrcutors can post new courses.</p>
          </div>
        )} */}

        <PostCourseWrap>
          {messageError && open && (
            // <MsgContainer>
            <MsgWrap>
              <MsgDiv>
                <MsgBtn onClick={handleClose}>x</MsgBtn>
                <MsgIcon>
                  <ImWarning />
                  <MsgH1>Error !</MsgH1>
                </MsgIcon>
                <MsgP>{messageError}</MsgP>
              </MsgDiv>
            </MsgWrap>
            // </MsgContainer>
          )}
          {messageSuccess && openOne && (
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
                <MsgBtn1 onClick={handleAgain}>Post Course Again</MsgBtn1>
                <MsgBtn2 onClick={handleContinue}>Continue</MsgBtn2>

                {/* </MsgBtnDiv> */}
              </MsgDivOne>
            </MsgWrap>
            // </MsgContainer>
          )}
          <PostCourseContent>
            {currentUser && currentUser.user.role == "instructor" && (
              <PostCourseForm>
                <PostCourseH1>Post Course</PostCourseH1>
                <PostCourseLabel for="exampleforTitle">Title</PostCourseLabel>
                <PostCourseInput
                  name="title"
                  type="text"
                  id="exampleforTitle"
                  onChange={handleChangeTitle}
                ></PostCourseInput>
                <PostCourseLabel for="exampleforContent">Content</PostCourseLabel>
                <PostCourseText
                  id="exampleforContent"
                  aria-describedby="emailHelp"
                  name="content"
                  onChange={handleChangeDescription}
                ></PostCourseText>
                <PostCourseLabel>max</PostCourseLabel>
                <PostCourseInput
                  name="max"
                  type="number"
                  // id="exampleforTitle"
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
                      onChange={handleChangeDate}
                      required
                    ></PostCourseInput>
                    {/* <DateRangePicker /> */}
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
                  className="form-control"
                  id="exampleforPrice"
                  onChange={handleChangePrice}
                  placeholder="$"
                ></PostCourseInput>
                <PostCourseBtn onClick={postCourse}>Submit</PostCourseBtn>
              </PostCourseForm>
            )}
          </PostCourseContent>
        </PostCourseWrap>
      </Container>
    </>
  );
};

export default PostCourse;

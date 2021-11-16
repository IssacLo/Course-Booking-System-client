import React, { useState } from "react";
import { useHistory } from "react-router";
import { ImWarning } from "react-icons/im";
import { MdOutlineDone } from "react-icons/md";
import AuthService from "../../services/auth.service";
// import { Link } from "react-router-dom";

import {
  Container,
  MsgWrap,
  Wrapper,
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
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  SignUp,
} from "./SigninElement";

const SignIn = (props) => {
  let { currentUser, setCurrentUser } = props;
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  let [messageOne, setMessageOne] = useState("");
  let [open, setOpen] = useState(true);
  let [seconds, setSeconds] = useState(10);
  // let [openOne, setOpenOne] = useState(true);
  // let [contin, setContin] = useState(null);
  // let [again, setAgain] = useState(null);

  const history = useHistory();

  const timeOut = () => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(history.push("/profile1"));
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const handleCloseOne = () => {
  //   setOpenOne(false);
  // };
  // const handleContinue = () => {
  //   setContin(history.push("/course1"));
  // };
  // const handleAgain = () => {
  //   setAgain(history.go(0));
  // };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(email, password)
      .then((response) => {
        console.log(response.data, "dadada");
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        // setMessageOne(setTimeout(() => {
        //   history.push("/profile1")
        // }, 3000));
        // window.alert("Login successfully, you are now redirected to profile page");
        setCurrentUser(AuthService.getCurrentUser);
        history.push("/profile1");
      })
      .catch((error) => {
        console.log(error, "error");
        setMessage(error.response.data);
        setOpen(true);
      });
  };
  return (
    <>
      {/* {message && (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      )} */}
      <Container>
        <FormWrap>
          {message && open && (
            // <MsgContainer>
            <MsgWrap>
              <MsgDiv>
                <MsgBtn onClick={handleClose}>x</MsgBtn>
                <MsgIcon>
                  <ImWarning />
                  <MsgH1>Error !</MsgH1>
                </MsgIcon>
                <MsgP>{message}</MsgP>
              </MsgDiv>
            </MsgWrap>
            // </MsgContainer>
          )}
          {messageOne && (
            // <MsgContainer>
            <MsgWrap>
              <MsgDivOne>
                <MsgIcon>
                  <MdOutlineDone />
                  <MsgH1>Success !</MsgH1>
                </MsgIcon>
                <MsgP>
                  {messageOne} {seconds}
                </MsgP>
              </MsgDivOne>
            </MsgWrap>
            // </MsgContainer>
          )}
          <Icon to="/">Coursement</Icon>
          <FormContent>
            <Form>
              <FormH1>Sign In</FormH1>

              <FormLabel htmlFor="username">Email</FormLabel>
              <FormInput
                onChange={handleChangeEmail}
                type="text"
                // className="form-control"
                name="email"
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                onChange={handleChangePassword}
                type="password"
                // className="form-control"
                name="password"
              />
              <FormButton type="submit" onClick={handleLogin}>
                <span>Continue</span>
              </FormButton>

              <Text>Don’t have an account?</Text>
              <SignUp to="/signup">Sign Up</SignUp>
            </Form>
            {/* <FormButton type="submit" onClick={handleLogin}>
              <span>Continue</span>
            </FormButton> */}
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

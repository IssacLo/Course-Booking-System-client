import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";
import { ImWarning } from "react-icons/im";
import { MdOutlineDone } from "react-icons/md";

import {
  Container,
  FormWrap,
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
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormSelect,
  Text,
  SignIn,
} from "./SignupElement";

const SignUp = () => {
  const history = useHistory();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");
  let [message, setMessage] = useState("");
  let [messageOne, setMessageOne] = useState("");
  let [open, setOpen] = useState(true);
  let [contin, setContin] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleContinue = () => {
    setContin(history.push("/signin"));
  };

  // const handleAgain = () => {
  //   setAgain(history.go(0));
  // };
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("hihi");
    AuthService.register(username, email, password, role)
      .then(() => {
        setMessageOne("Registration succeeds");
        // window.alert("Registration succeeds. You are now to redirected to login page.");
        // history.push("/signin");
      })
      .catch((error) => {
        console.log(error.response);
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
                <MsgP>{messageOne}</MsgP>
                <MsgBtn2 onClick={handleContinue}>Continue</MsgBtn2>
              </MsgDivOne>
            </MsgWrap>
            // </MsgContainer>
          )}
          <Icon to="/">Coursement</Icon>
          <FormContent>
            <Form>
              <FormH1>Create your new account</FormH1>
              <FormLabel htmlFor="username">User Name</FormLabel>
              <FormInput
                onChange={handleChangeUsername}
                type="text"
                // className="form-control"
                name="username"
              />
              <FormLabel htmlFor="username">Email</FormLabel>
              <FormInput
                onChange={handleChangeEmail}
                type="text"
                className="form-control"
                name="email"
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                onChange={handleChangePassword}
                type="password"
                // className="form-control"
                name="password"
              />
              <FormLabel htmlFor="password">Role</FormLabel>
              <FormSelect
                onChange={handleChangeRole}
                type="text"
                // className="form-control"
                name="role"
              >
                <option value="">Select your option</option>
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
              </FormSelect>
              <FormButton onClick={handleRegister}>Sign Up</FormButton>
              <Text>Already have an account?</Text>
              <SignIn to="/signin">Sign In</SignIn>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";

import {
  Container,
  FormWrap,
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

const SignUpStudent = () => {
  const history = useHistory();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");
  let [message, setMessage] = useState("");

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
        window.alert("Registration succeeds. You are now to redirected to login page.");
        history.push("/signin");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
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
          <Icon to="/">Coursement</Icon>
          <FormContent>
            <Form>
              <FormH1>Create your new account </FormH1>
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
                <option value="dfgdfgdf">Student</option>
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

export default SignUpStudent;

import React, { useState } from "react";
import SignIn from "../components/Signin";
import SideBar from "./Sidebar";

import NavComponent from "../components/Navbar/nav-component";

const SignInComponent = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // console.log("fdsfsd");
  let { currentUser, setCurrentUser } = props;
  // console.log(props, "props");

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      {/* <SideBar isOpen={isOpen} toggle={toggle} />
      <NavComponent toggle={toggle} /> */}

      <SignIn currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </>
  );
};

export default SignInComponent;

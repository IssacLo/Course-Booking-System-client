import React, { useState } from "react";
import SignUp from "./Signup";

import SideBar from "./Sidebar";

import NavComponent from "../components/Navbar/nav-component";

const SignupComponent = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      {/* <SideBar isOpen={isOpen} toggle={toggle} />
      <NavComponent toggle={toggle} /> */}
      <SignUp />
    </>
  );
};

export default SignupComponent;

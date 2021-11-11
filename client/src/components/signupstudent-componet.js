import React, { useState } from "react";
import SignUpStudent from "./SignUpStudent";

import SideBar from "./Sidebar";

import NavComponent from "../components/Navbar/nav-component";

const SignupStudentComponent = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      {/* <SideBar isOpen={isOpen} toggle={toggle} />
      <NavComponent toggle={toggle} /> */}
      <SignUpStudent />
    </>
  );
};

export default SignupStudentComponent;

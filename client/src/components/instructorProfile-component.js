import React, { useState } from "react";
import InstructorProfile from "./InstructorProfile";

import SideBar from "./Sidebar";

import NavComponent from "./Navbar/nav-component";

const InstructorProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      {/* <SideBar isOpen={isOpen} toggle={toggle} />
      <NavComponent toggle={toggle} /> */}
      <InstructorProfile currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </>
  );
};

export default InstructorProfileComponent;

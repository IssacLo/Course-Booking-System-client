import React, { useState } from "react";
import InfoSection from "./InfoSection";
import HeroSection from "./HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFive } from "./InfoSection/Data";
import Services from "./Services1";
import SideBar from "./Sidebar";

import NavComponent from "../components/Navbar/nav-component";
const HomeComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, setCurrentUser } = props;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <SideBar isOpen={isOpen} toggle={toggle} /> */}
      {/* <NavComponent toggle={toggle} /> */}
      {/* <HeroSection /> */}
      <InfoSection currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {/* <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
      <InfoSection {...homeObjFive} /> */}
    </>
  );
};

export default HomeComponent;

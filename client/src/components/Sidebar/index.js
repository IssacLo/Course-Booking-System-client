import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
} from "./SidebarElement";

const SideBar = (props) => {
  let isOpen = props.isOpen;
  let toggle = props.toggle;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="instructor" onClick={toggle}>
            Instructor
          </SidebarLink>
          <SidebarLink to="students" onClick={toggle}>
            Students
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;

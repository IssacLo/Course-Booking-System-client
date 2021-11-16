import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
// import { MdOutlineLogout } from "react-icons/md";
// import { MdLogout } from "react-icons/md";
import PopUp from "../PopUp";
import AuthService from "../../services/auth.service";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinks1,
  NavBtn,
  NavBtn1,
  NavBtnLink,
  NavBtnLink1,
  LinkScroll,
  LineLogout,
  Logout,
  LineLogIn,
  LogIn,
  PopUpContainer,
} from "./navcss";

const NavComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  let toggle = props.toggle;
  let [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const onHover = () => {
    setHover(!hover);
  };
  const handleLogout = () => {
    AuthService.logout();
    // window.alert("Logout Successfully,now you are redirect to homepage ");
    setCurrentUser(null);
    history.push("/");
  };

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Cousement
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          {!currentUser && (
            <NavMenu>
              <NavItem>
                {/* <NavLinks1 to="/about"> */}
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
                {/* </NavLinks1> */}
              </NavItem>
              <NavItem>
                <NavLinks
                  to="instructor"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Instructor
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="student"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Students
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
          )}
          {!currentUser && (
            <NavBtn>
              <NavBtnLink to="/signin" onMouseEnter={onHover} onMouseLeave={onHover}>
                Sign In {hover ? <LineLogIn /> : <LogIn />}
              </NavBtnLink>
            </NavBtn>
          )}

          {currentUser && (
            <NavMenu>
              <NavItem>
                <NavBtnLink1 to="/profile1">Profile</NavBtnLink1>
              </NavItem>
            </NavMenu>
          )}
          {currentUser && (
            <NavMenu>
              <NavItem>
                <NavBtnLink1 to="/course1">Course</NavBtnLink1>
              </NavItem>
            </NavMenu>
          )}
          {currentUser && currentUser.user.role === "instructor" && (
            <NavMenu>
              <NavItem>
                <NavBtnLink1 to="/postCourse1">Post Course</NavBtnLink1>
              </NavItem>
            </NavMenu>
          )}
          {currentUser && currentUser.user.role === "student" && (
            <NavMenu>
              <NavItem>
                <NavBtnLink1 to="/enroll1">Enroll</NavBtnLink1>
              </NavItem>
            </NavMenu>
          )}
          {currentUser && (
            <NavBtn1 onClick={handleOpen} onMouseEnter={onHover} onMouseLeave={onHover}>
              {/* <NavBtnLink onClick={handleOpen} to=""> */}
              Sign Out {hover ? <LineLogout /> : <Logout />}
              {/* </NavBtnLink> */}
            </NavBtn1>
          )}
          {open && <PopUp setOpen={setOpen} setCurrentUser={setCurrentUser} />}
        </NavbarContainer>
      </Nav>
    </>
    // <div>
    //   <nav>
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //       <div className="container-fluid">
    //         <div className="collapse navbar-collapse" id="navbarNav">
    //           <ul className="navbar-nav">
    //             <li className="nav-item">
    //               <Link className="nav-link active" to="/">
    //                 Home
    //               </Link>
    //             </li>
    //             {!currentUser && (
    //               <li className="nav-item">
    //                 <Link className="nav-link" to="/register">
    //                   Register
    //                 </Link>
    //               </li>
    //             )}
    //             {!currentUser && (
    //               <li className="nav-item">
    //                 <Link className="nav-link" to="/login">
    //                   Login
    //                 </Link>
    //               </li>
    //             )}
    //             {currentUser && (
    //               <li className="nav-item">
    //                 <Link onClick={handleLogout} className="nav-link" to="#">
    //                   Logout
    //                 </Link>
    //               </li>
    //             )}
    //             {currentUser && (
    //               <li className="nav-item">
    //                 <Link className="nav-link" to="/profile">
    //                   Profile
    //                 </Link>
    //               </li>
    //             )}
    //             {currentUser && (
    //               <li className="nav-item">
    //                 <Link className="nav-link" to="/course">
    //                   My Course
    //                 </Link>
    //               </li>
    //             )}
    //             {currentUser && currentUser.user.role == "instructor" && (
    //               <li className="nav-item">
    //                 <Link className="nav-link" to="/postCourse">
    //                   Post Course
    //                 </Link>
    //               </li>
    //             )}
    //             {currentUser && currentUser.user.role == "student" && (
    //               <li className="nav-item">
    //                 <Link className="nav-link" to="/enroll">
    //                   Enroll
    //                 </Link>
    //               </li>
    //             )}
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //   </nav>
    // </div>
  );
};

export default NavComponent;

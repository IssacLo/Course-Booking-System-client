import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomeComponent from "./components/home-component";
import AboutComponent from "./components/about-component";
import NavComponent from "./components/Navbar/nav-component";
import RegisterComponent from "./components/register-component";
import LoginComponent from "./components/login-component";
import ProfileComponent from "./components/profile-component";
import CourseComponent from "./components/course-component";
import PostCourseComponent from "./components/postCourse-component";
import PostCourse1Component from "./components/postCourse1-component";
import EnrollComponent from "./components/enroll-component";
import EnrollComponent1 from "./components/enroll1-component";
import SignInComponent from "./components/signin-component";
import SignUpComponent from "./components/signup-component";
import InstructorProfileComponent from "./components/instructorProfile-component";
import SignUpStudentComponent from "./components/signupstudent-componet";
import Profile1Component from "./components/profile1-component";
import Course1Component from "./components/course1-component";
import ErrorComponent from "./components/error-component";
// import SignIn from "./components/Signin";
import AuthService from "./services/auth.service";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";
// import SignInComponent from "./components/signin-component";

function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavComponent toggle={toggle} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {/* <HeroSection /> */}
      <Switch>
        <Route path="/" exact>
          <HomeComponent />
        </Route>
        <Route path="/about" exact>
          <AboutComponent />
        </Route>
        <Route path="/register" exact>
          <RegisterComponent />
        </Route>
        <Route path="/signup" exact>
          <SignUpComponent />
        </Route>
        <Route path="/instructorprofile/:id" exact>
          <InstructorProfileComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        {/* <Route path="/signupstudent" exact>
          <SignUpStudentComponent />
        </Route>  */}

        {/* <Route path="/login" exact>
          <LoginComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route> */}
        <Route path="/signin" exact>
          <SignInComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>

        <Route path="/profile" exact>
          <ProfileComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/profile1" exact>
          <Profile1Component currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/course" exact>
          <CourseComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/course1" exact>
          <Course1Component currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/postCourse" exact>
          <PostCourseComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/postCourse1" exact>
          <PostCourse1Component currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/enroll" exact>
          <EnrollComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/enroll1" exact>
          <EnrollComponent1 currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/enroll1" exact>
          <EnrollComponent1 currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="*">
          <ErrorComponent />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

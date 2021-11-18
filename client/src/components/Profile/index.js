import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  ProfileWrap,
  ProfileH1,
  ProfileH3,
  ProfilePWrap,
  ProfileAlert,
  ProfileBtn,
  ProfileP,
  ProfileP1,
  ProfileStrong,
} from "./ProfileElement";

const Profile = (props) => {
  let { currentUser, setCurrentUser } = props;
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleTakeToLogin = () => {
    history.push("/login");
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(props, "props");

  return (
    <>
      <Container>
        {/* {!currentUser && (
          <div>
            <p>You must login first before searching for courses.</p>
            <button onClick={handleTakeToLogin}>Take me to login page.</button>
          </div>
        )} */}
        {/* {currentUser && currentUser.user.role == "instructor" && (
          <div>
            <h1>Only students can enroll in courses.</h1>
          </div>
        )} */}

        <ProfileWrap>
          <ProfileH1>
            <ProfileStrong>Profile Page</ProfileStrong>
          </ProfileH1>
          <ProfileH3>
            <ProfileStrong>Welcome back {currentUser.user.username}</ProfileStrong>
          </ProfileH3>
          <ProfilePWrap>
            <ProfileP1 onClick={handleOpen}>JWT</ProfileP1>
            {open && (
              <ProfileAlert>
                <ProfileBtn onClick={handleClose}>x</ProfileBtn>
                {currentUser.token}
              </ProfileAlert>
            )}
            <ProfileP>ID: {currentUser.user._id}</ProfileP>
            <ProfileP>Email: {currentUser.user.email}</ProfileP>
            <ProfileP>Role: {currentUser.user.role}</ProfileP>
          </ProfilePWrap>
        </ProfileWrap>
      </Container>
    </>
  );
};

export default Profile;

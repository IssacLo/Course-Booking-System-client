import React, { useState } from "react";
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(props, "props");

  return (
    <Container>
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
  );
};

export default Profile;

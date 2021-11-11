import React from "react";
import Profile from "../components/Profile";

const Profile1Component = (props) => {
  let { currentUser, setCurrentUser } = props;
  // console.log(props);

  return (
    <>
      <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />;
    </>
  );
};

export default Profile1Component;

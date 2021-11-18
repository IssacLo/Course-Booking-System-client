import React from "react";
import Enroll from "./Enroll";

const EnrollComponent1 = (props) => {
  let { currentUser, setCurrentUser } = props;
  return (
    <>
      <Enroll currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </>
  );
};

export default EnrollComponent1;

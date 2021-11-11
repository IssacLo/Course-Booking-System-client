import React, { useState } from "react";
import Course from "./Course";

const Course1Component = (props) => {
  let { currentUser, setCurrentUser } = props;
  return (
    <div>
      <Course currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
};

export default Course1Component;

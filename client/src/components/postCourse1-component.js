import React from "react";
import PostCourse from "./PostCourse";

const PostCourse1Component = (props) => {
  let { currentUser, setCurrentUser } = props;

  return (
    <>
      <PostCourse currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </>
  );
};

export default PostCourse1Component;

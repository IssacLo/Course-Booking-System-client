import React from "react";
import { useHistory } from "react-router-dom";
import Icon1 from "../images/svg-8.svg";
import { Container, ErrorWrap, ErrorWrap1, ImgWrap, Img, ErrorP, ErrorBtn } from "./ErrorElement";

const Error = () => {
  const history = useHistory();

  const handleTakeToLogin = () => {
    history.push("/");
  };
  return (
    <>
      <Container>
        <ErrorWrap>
          <ImgWrap>
            <Img src={Icon1} alt="PostCourse" />
          </ImgWrap>
          <ErrorWrap1>
            <ErrorP>Page Not Found</ErrorP>
            <ErrorBtn onClick={handleTakeToLogin}>Go Back</ErrorBtn>
          </ErrorWrap1>
        </ErrorWrap>
      </Container>
    </>
  );
};

export default Error;

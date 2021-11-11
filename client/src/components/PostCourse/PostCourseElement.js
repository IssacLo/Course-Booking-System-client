import styled from "styled-components";

export const Container = styled.div`
  min-height: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(108deg, rgba(228, 248, 255, 1) 0%, rgba(76, 114, 127, 1) 100%);
`;

export const TakeToLogin = styled.div`
  margin-top: 150px;
`;

export const MsgWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  z-index: 1;
`;
export const MsgDiv = styled.div`
  /* justify-content: center;
  align-items: center; */
  /* 
  width: 100%;
  padding: 1rem; */
  /* float: center; */
  /* float: inline-start; */
  /* margin-top: 0; */
  /* position: fixed; */
  /* top: 100px; */

  height: 10rem;
  width: 25rem;
  /* display: grid; */
  /* margin: 0 auto; */
  /* padding: 80px 32px; */
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  background-color: #ff3c35;
`;
export const MsgDivOne = styled.div`
  height: 10rem;
  width: 25rem;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  /* top: 100px; */
  /* background-color: red; */
  background-color: #37f05c;
`;

export const MsgIcon = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  /* border: 1px solid black;
  border-radius: 50%; */
  margin-top: 2rem;
  margin-left: 2rem;
`;

export const MsgH1 = styled.h5`
  /* display: flex; */
  margin-left: 1.5rem;
  top: 1rem;
`;

export const MsgP = styled.p`
  margin-left: 5.5rem;
  font-size: 0.9rem;
`;

export const MsgBtn = styled.span`
  /* margin-left: 15px; */
  margin-top: 1rem;
  margin-right: 1rem;
  color: black;
  /* font-weight: bold; */
  /* float: right; */
  display: flex;
  justify-content: flex-end;
  font-size: 22px;
  line-height: 5px;
  cursor: pointer;
  transition: 0.1s;

  :hover {
    color: white;
  }
`;

export const MsgBtnDiv = styled.div`
  display: inline;
  height: auto;
  width: auto;
`;
export const MsgBtn1 = styled.span`
  /* display: inline; */
  margin-left: 4rem;
  /* margin-top: 1rem; */
  color: black;
  font-weight: bold;
  /* float: right; */
  /* font-size: 22px; */
  /* line-height: 5px; */
  cursor: pointer;
  transition: 0.1s;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.1rem 0.5rem;

  :hover {
    color: white;
    background-color: black;
  }
`;
export const MsgBtn2 = styled.span`
  /* display: inline; */
  margin-left: 1rem;
  /* margin-top: 0.2rem; */
  color: black;
  font-weight: bold;
  /* float: right; */
  /* font-size: 22px; */
  /* line-height: 5px; */
  cursor: pointer;
  transition: 0.1s;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.1rem 0.5rem;

  :hover {
    color: white;
    background-color: black;
  }
`;
export const PostCourseWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PostCourseContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PostCourseForm = styled.form`
  background: black;
  max-width: 500px;
  height: auto;
  width: 100%;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  z-index: 0;
`;

export const PostCourseH1 = styled.h1`
  font-size: 20px;
  text-align: center;
  color: white;
`;

export const PostCourseLabel = styled.label`
  font-size: 14px;
  color: white;
`;

export const PostCourseInput = styled.input`
  padding: 10px 10px;
  margin-bottom: 14px;
  border: none;
  border-radius: 4px;
`;

export const PostCourseText = styled.textarea`
  padding: 10px 10px;
  margin-bottom: 14px;
  border: none;
  border-radius: 4px;
`;

export const PostCourseBtn = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  background: white;
  border-radius: 5px;
  border: none;

  &:hover {
    background: grey;
  }
`;

export const PostCourseDateWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PostCourseDate = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  /* width: 300px; */
`;

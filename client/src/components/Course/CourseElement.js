import styled from "styled-components";

export const Container = styled.div`
  min-height: 1000px;
  background: #fff;
`;

export const DivWrapper1 = styled.div`
  /* display: inline-flex; */
`;

export const DivWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 0;
  /* border: 1 solid red; */
  /* height: auto; */
  /* width: auto; */
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
`;
export const DivWrapper3 = styled.div`
  /* float: center;
  z-index: 1; */
`;

export const CourseWrapper = styled.div`
  /* display: inline; */
  /* height: 100%; */
  /* width: 20rem; */
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start; */
  /* margin-left: 50px; */
  /* z-index: 0; */
`;

export const CourseWrap = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  /* justify-content: center;
  align-items: flex-start; */
  /* margin-left: 50px; */
  /* z-index: 0; */
  /* height: 200px;
  width: 300px;
  background: linear-gradient(108deg, rgba(228, 248, 255, 1) 0%, rgba(229, 229, 229, 1) 100%);
  margin: 50px;
  border-radius: 30px;
  border: 2px solid black; */
  /* display: flex; */
  /* justify-content: flex-start;
  align-items: flex-start; */
  /* border: 1 solid red; */
  height: 15rem;
  min-width: 35rem;
  max-width: 30rem;
  background: linear-gradient(108deg, rgba(228, 248, 255, 1) 0%, rgba(229, 229, 229, 1) 100%);
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 10px;

  border-radius: 30px;
  border: 2px solid black;
`;

// export const CourseRow = styled.div`
//   /* display: flex; */
//   /* justify-content: flex-start;
//   align-items: flex-start; */
//   height: 15rem;
//   min-width: 35rem;
//   max-width: 30rem;
//   background: linear-gradient(108deg, rgba(228, 248, 255, 1) 0%, rgba(229, 229, 229, 1) 100%);
//   margin-left: 30px;
//   margin-right: 30px;
//   margin-top: 20px;
//   margin-bottom: 10px;

//   border-radius: 30px;
//   border: 2px solid black;
// `;

export const CourseH5 = styled.h5`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin-top: 1rem;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  /* border-bottom: auto solid black; */
  /* border-width: 1.5rem; */
  /* border: 1 solid red; */
  color: black;
`;

export const CoursePwrap = styled.div`
  display: inline;
`;

export const CourseP = styled.p`
  /* display: inline-block; */
  max-width: 10000px;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: black;
`;

export const CourseBtn = styled.button`
  /* justify-content: flex-end;
  align-items: flex-end; */
  background: none;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  margin-left: 6rem;
  /* margin-top: 1rem; */

  /* width: 50px; */
  /* height:50px */
  /* padding: 15px;
  font-size: 50px;
  margin-top: 20px;
  margin-left: 30px;
  border-radius: 5px;
  border: 2px solid black;
  font-size: 10px;
  background: white;
  box-shadow: black; */

  /* &:hover {
    background: grey;
    color: black;
  } */
`;

// export const PostCourseContent = styled.div`
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// `;

export const EditWrapper = styled.div``;
export const EditLabel = styled.label`
  font-size: 14px;
  color: black;
`;

export const EditInputH5 = styled.input`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin-top: 0.5rem;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  padding: 0.1rem;
  width: 25rem;
  /* border-bottom: auto solid black; */
  /* border-width: 1.5rem; */
  border: 1px solid rgb(128, 128, 128, 0.3);
  border-radius: 4px;
  color: black;
  background: none;
`;

export const EditInput = styled.input`
  display: block;
  width: 25rem;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  border: 1px solid rgb(128, 128, 128, 0.3);
  border-radius: 4px;
  color: black;
  background: none;
`;
export const EditText = styled.textarea`
  /* display: inline-block; */
  max-width: 10000px;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: black;
  background: none;
`;
export const EditDateWrap = styled.div`
  /* display: inline; */
  /* padding: 10px 10px; */
  /* margin-bottom: 14px; */
  border: none;
  border-radius: 4px;
  /* background: none; */
`;
export const EditDate = styled.input`
  /* display: block; */
  max-width: 10000px;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  border: 1px solid rgb(128, 128, 128, 0.3);

  border-radius: 4px;
  color: black;
  background: none;
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
  /* background: black; */
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

export const PopUpBackground = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  /* background-color: rgba(200, 200, 200); */
  /* position: fixed; */
  display: flex;
  justify-content: center;
  align-items: center;
  top: 3rem;
  z-index: 1;
`;
export const PopUpContainer = styled.div`
  width: auto;
  height: auto;
  border-radius: 12px;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const PopUpCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PopUpCloseBtn1 = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;

  :hover {
    color: green;
  }
`;

export const PopUpTitle = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;

export const PopUpH1 = styled.h1``;

export const PopUpFooter = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpBtn = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;

  :hover {
    color: black;
  }
`;

export const MsgWrap = styled.div`
  /* height: 100%; */
  /* width: 100%; */
  /* display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  z-index: 1; */
  /* height: 15rem;
  min-width: 35rem;
  max-width: 30rem; */
  /* background: red; */
  /* margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 10px;

  border-radius: 30px;
  border: 2px solid black; */
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

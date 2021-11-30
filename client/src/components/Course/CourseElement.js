import styled from "styled-components";

export const Container = styled.div`
  min-height: 1000px;
  background: linear-gradient(#f0f0f0, #bfbfbf);
`;

export const H1 = styled.h1`
  /* margin-top: 3rem; */
  margin-left: 5rem;
`;

export const DivWrapper1 = styled.div``;

export const DivWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  z-index: 0;
`;
export const DivWrapper3 = styled.div``;

export const CourseWrapper = styled.div`
  position: relative;
  z-index: 0;
`;

export const CourseWrap = styled.div`
  height: 17rem;
  min-width: 29rem;
  max-width: 30rem;
  background: linear-gradient(108deg, rgba(228, 248, 255, 1) 0%, rgba(229, 229, 229, 1) 100%);
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 10px;

  border-radius: 30px;
  border: 2px solid black;
  /* position: relative; */
  /* z-index: 0; */
`;

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
  border-bottom: none;
`;

export const CourseBtn = styled.button`
  margin-left: 15rem;
  margin-top: -20rem;

  color: #d63e3e;
  font-weight: bold;

  cursor: pointer;
  transition: 0.1s;
  border: 2px solid #d63e3e;
  /* border: none; */
  border-radius: 4px;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  :hover {
    color: white;
    background-color: #d63e3e;
  }
`;
export const CourseBtn1 = styled.button`
  margin-left: 5rem;
  margin-top: 1.5rem;

  color: #4ab29c;
  font-weight: bold;

  cursor: pointer;
  transition: 0.1s;
  border: 2px solid #4ab29c;
  /* border: none; */
  border-radius: 4px;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  :hover {
    color: white;
    background-color: #4ab29c;
  }
`;
export const CourseBtn3 = styled.button`
  margin-left: 5rem;
  margin-top: 1.5rem;

  color: #d63e3e;
  font-weight: bold;

  cursor: pointer;
  transition: 0.1s;
  border: 2px solid #d63e3e;
  /* border: none; */
  border-radius: 4px;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  :hover {
    color: white;
    background-color: #d63e3e;
  }
`;
export const CourseBtn2 = styled.button`
  margin-left: 5.5rem;
  margin-top: 0.7rem;

  color: #ff8154;
  font-weight: bold;

  cursor: pointer;
  transition: 0.1s;
  border: 2px solid #ff8154;
  /* border: none; */
  border-radius: 4px;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  :hover {
    color: white;
    background-color: #ff8154;
  }
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
  /* justify-content: center;
  align-items: center;  */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* margin-bottom: 10rem; */
  /* top: 3rem; */
  /* z-index: 2; */
`;
export const PopUpContainer = styled.div`
  height: 12rem;
  width: 27rem;
  /* border: 1px solid #ffbb2b; */
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  background: #00264e;
  /* margin-bottom: 10rem; */
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
  display: flex;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  /* border: 1px solid black;
  border-radius: 50%; */
  margin-top: 3rem;
  margin-left: 2rem;
`;

export const PopUpH1 = styled.h1`
  /* display: flex; */
  margin-left: 3.5rem;
  /* margin-top: -1rem; */
  font-size: 1.7rem;
  font-weight: bold;
`;
export const PopUpP = styled.p`
  margin-left: 5.5rem;
  font-size: 0.9rem;
  color: #fff;
`;

export const PopUpBtn1 = styled.button`
  /* display: inline; */
  margin-top: 0.5rem;
  margin-left: 6rem;
  /* margin-top: 1rem; */
  color: #4ab29c;
  font-weight: bold;
  /* float: right; */
  /* font-size: 22px; */
  /* line-height: 5px; */
  cursor: pointer;
  transition: 0.1s;
  /* border: 2px solid #4ab29c; */
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  :hover {
    color: white;
    background-color: #4ab29c;
  }
`;
export const PopUpBtn2 = styled.button`
  /* display: inline; */
  margin-left: 2rem;
  /* margin-top: 0.2rem; */
  color: #4ab29c;
  font-weight: bold;
  /* background-color: #4ab29c; */
  /* float: right; */
  /* font-size: 22px; */
  /* line-height: 5px; */
  cursor: pointer;
  transition: 0.1s;
  /* border: 2px solid #4ab29c; */
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  :hover {
    color: white;
    background-color: #4ab29c;
  }
`;

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
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
export const MsgDiv = styled.div`
  height: 10rem;
  width: 25rem;

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
  margin-left: 4rem;
  color: black;
  font-weight: bold;
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
  margin-left: 6rem;
  color: black;
  font-weight: bold;
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

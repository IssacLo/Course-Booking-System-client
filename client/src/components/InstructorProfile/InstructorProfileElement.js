import styled from "styled-components";

export const Container = styled.div`
  min-height: 600px;
`;

export const ProfileWrap = styled.div`
  /* display: flex; */
  /* justify-content: flex-start;
  align-items: flex-start;  */
  margin-left: 50px;
`;

export const ProfileH1 = styled.h1`
  top: 0;
  font-size: 50px;
  margin-top: 30px;
  /* padding: 18px; */
  width: 100%;
`;

export const ProfileAlert = styled.div`
  padding: 20px;
  /* text-align: left; */
  word-wrap: break-word;
  background-color: lightgreen;
  color: white;
  /* border: 1px solid black; */
  /* border-radius: 1rem; */
  margin-bottom: 1rem;
`;

export const ProfileBtn = styled.span`
  /* margin-left: 15px; */
  margin-top: 0;
  color: white;
  /* font-weight: bold; */
  float: right;
  font-size: 22px;
  line-height: 5px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    color: black;
  }
`;

export const ProfileH3 = styled.h3`
  font-size: 40px;
  /* margin-bottom: 30px; */
`;

export const ProfilePWrap = styled.div`
  /* border: 1px solid black; */
  /* border-radius: 15px; */
  /* padding: 18px; */
  max-width: 1000px;
  /* text-align: justify; */
`;

export const ProfileP = styled.p`
  font-size: 20px;
  /* margin-bottom: 20px; */
`;
export const ProfileP1 = styled.p`
  width: auto;
  font-size: 20px;
  margin-bottom: 20px;
  word-wrap: break-word;
  cursor: pointer;

  :hover {
    color: blue;
    /* transform: scale(1.01); */
    /* transition: 0.5s ease-in-out; */
  }
`;
export const CourseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 50px;
  z-index: 0;
`;

export const CourseWrap = styled.div`
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-left: 50px; */
  /* height: 200px;
  width: 300px;
  background: linear-gradient(108deg, rgba(228, 248, 255, 1) 0%, rgba(229, 229, 229, 1) 100%);
  margin: 50px;
  border-radius: 30px;
  border: 2px solid black; */
`;

export const CourseRow = styled.div`
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start; */
  height: 15rem;
  min-width: 23rem;
  max-width: 30rem;
  background: linear-gradient(108deg, rgba(228, 248, 255, 1) 0%, rgba(229, 229, 229, 1) 100%);
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 10px;

  border-radius: 30px;
  border: 2px solid black;
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

export const ProfileStrong = styled.strong``;

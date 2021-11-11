import styled from "styled-components";

export const Container = styled.div`
  min-height: 600px;
`;

export const ProfileWrap = styled.div`
  /* display: flex; */
  /* justify-content: flex-start;
  align-items: flex-start;  */
  margin: 50px;
`;

export const ProfileH1 = styled.h1`
  top: 0;
  font-size: 50px;
  margin-bottom: 30px;
  padding: 18px;
  width: 400px;
`;

export const ProfileAlert = styled.div`
  padding: 20px;
  /* text-align: left; */
  word-wrap: break-word;
  background-color: lightgreen;
  color: white;
  border: 1px solid black;
  border-radius: 1rem;
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
  margin-bottom: 30px;
`;

export const ProfilePWrap = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 18px;
  max-width: 1000px;
  /* text-align: justify; */
`;

export const ProfileP = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
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

export const ProfileStrong = styled.strong``;

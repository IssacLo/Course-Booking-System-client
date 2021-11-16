import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 300px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(108deg, rgba(228, 248, 255, 1) 0%, rgba(76, 114, 127, 1) 100%);
`;

// export const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

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

  height: 9rem;
  width: 22rem;
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
  margin-top: 1rem;
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
// export const MsgBtn1 = styled.span`
//   /* display: inline; */
//   margin-left: 4rem;
//   /* margin-top: 1rem; */
//   color: black;
//   font-weight: bold;
//   /* float: right; */
//   /* font-size: 22px; */
//   /* line-height: 5px; */
//   cursor: pointer;
//   transition: 0.1s;
//   border: 1px solid black;
//   border-radius: 4px;
//   padding: 0.1rem 0.5rem;

//   :hover {
//     color: white;
//     background-color: black;
//   }
// `;
// export const MsgBtn2 = styled.span`
//   /* display: inline; */
//   margin-left: 1rem;
//   /* margin-top: 0.2rem; */
//   color: black;
//   font-weight: bold;
//   /* float: right; */
//   /* font-size: 22px; */
//   /* line-height: 5px; */
//   cursor: pointer;
//   transition: 0.1s;
//   border: 1px solid black;
//   border-radius: 4px;
//   padding: 0.1rem 0.5rem;

//   :hover {
//     color: white;
//     background-color: black;
//   }
// `;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 0;
  display: grid;
  margin: 0 auto;
  padding: 45px 32px;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: left;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  color: black;
`;

export const FormButton = styled.button`
  background: white;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: black;
  font-size: 20px;
  cursor: pointer;

  :hover {
    background-color: #4c727f;
  }
`;

// export const Span = styled.span`
// `

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const SignUp = styled(Link)`
  text-decoration: none;
  text-align: center;
`;

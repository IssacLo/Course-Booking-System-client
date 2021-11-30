import styled from "styled-components";

export const Container = styled.div`
  min-height: 1000px;
  background: #fff;
  /* position: relative; */
`;

// export const MsgContainer = styled.div`

// `

export const MsgDiv = styled.div`
  /* justify-content: center;
  align-items: center; */

  width: 100%;
  padding: 1rem;
  /* float: inline-end; */
  /* float: inline-start; */
  margin-top: 0;
  position: fixed;
  /* top: 100px; */
  background-color: #ff3c35;
  /* background-color: red; */
`;
export const MsgDivOne = styled.div`
  /* justify-content: center;
  align-items: center; */

  width: 100%;
  padding: 1rem;
  /* float: inline-end; */
  /* float: inline-start; */
  margin-top: 0;
  position: fixed;
  /* top: 100px; */
  /* background-color: red; */
  background-color: #37f05c;
`;

export const MsgIcon = styled.div`
  display: inline;
  font-size: 1rem;
  font-weight: bold;

  /* border: 1px solid black;
  border-radius: 50%; */
  margin: 0 1rem;
`;

export const MsgH1 = styled.h5`
  display: inline;
  margin-right: 1rem;
`;
export const MsgBtn = styled.span`
  /* margin-left: 15px; */
  margin-top: 0;
  color: black;
  /* font-weight: bold; */
  float: right;
  font-size: 22px;
  line-height: 5px;
  cursor: pointer;
  transition: 0.1s;

  :hover {
    color: white;
  }
`;

export const MsgBtn1 = styled.span`
  margin-right: 7rem;
  /* margin-top: 0.2rem; */
  color: black;
  font-weight: bold;
  float: right;
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

export const SearchWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Search = styled.div`
  display: flex;
  /* flex-direction: row;
  flex-wrap: wrap; */
  /* background: #000; */
  width: 400px;
  height: 50px;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 4rem;
  margin-right: 30px;
`;

export const SearchInput = styled.input`
  display: flex;
  width: 300px;
  padding: 10px;
  height: 45px;
`;

export const SearchBtn = styled.button`
  display: flex;
  /* background: #000; */

  color: black;
  background: white;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #888888;
  height: 45px;
  padding: 10px;

  /* &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  } */
`;

export const EnrollH1 = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 40px;
  padding-left: 50px;
  margin-top: 30px;
`;

export const EnrollWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 50px;
`;

export const EnrollWrap = styled.div`
  /* height: 200px;
  width: 300px;
  background: linear-gradient(108deg, rgba(228, 248, 255, 1) 0%, rgba(229, 229, 229, 1) 100%);
  margin: 50px;
  border-radius: 30px;
  border: 2px solid black; */
`;

export const EnrollRow = styled.div`
  height: 18rem;
  min-width: 23rem;
  max-width: 32rem;
  background: linear-gradient(108deg, rgba(228, 248, 255, 1) 0%, rgba(229, 229, 229, 1) 100%);
  /* background: ${({ background }) => (background ? "#36594F" : "#fff")}; */
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-right: 2rem;

  border-radius: 30px;
  border: 2px solid black;
  /* overflow: scroll;; */
`;

export const EnrollH5 = styled.h5`
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

export const EnrollPWrap = styled.div`
  display: inline;
`;

export const EnrollP = styled.p`
  /* display: inline-block; */
  max-width: 10000px;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: black;
`;

export const EnrollBtn = styled.button`
  margin-left: 14rem;
  margin-top: 0.5rem;

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

export const Icon = styled.p`
  display: inline;
  font-size: 20px;
`;

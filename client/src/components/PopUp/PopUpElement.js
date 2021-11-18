import styled from "styled-components";
import { GrLogout, GrLogin } from "react-icons/gr";
import { RiLogoutBoxRLine, RiLoginBoxLine } from "react-icons/ri";

export const PopUpBackground = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;  */
  /* height: 100%;
  width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  z-index: 1;
`;
export const PopUpContainer = styled.div`
  /* width: auto;
  height: auto;
  border-radius: 12px;
 background-color: white; 

   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px; */
  height: 12rem;
  width: 27rem;
  /* border: 1px solid #ffbb2b; */
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  background: #00264e;
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
  margin-left: 1.5rem;
  /* margin-top: -1rem; */
  font-size: 1.7rem;
  font-weight: bold;
`;
export const PopUpP = styled.p`
  margin-left: 5.5rem;
  font-size: 0.9rem;
  color: #fff;
`;

export const PopUpFooter = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
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
export const Logout = styled(GrLogout)`
  /* margin-left: 8px; */
  /* font-size: 20px; */
  color: #fff;
`;

export const LineLogout = styled(RiLogoutBoxRLine)`
  /* margin-left: 8px; */
  /* font-size: 20px; */
  color: #fff;
`;

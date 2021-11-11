import styled from "styled-components";

export const PopUpBackground = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(200, 200, 200); */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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

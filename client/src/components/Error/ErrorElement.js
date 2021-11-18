import styled from "styled-components";

export const Container = styled.div`
  min-height: 60rem;
  background: linear-gradient(108deg, rgba(228, 248, 255, 1) 0%, rgba(76, 114, 127, 1) 100%);
  /* position: fixed; */
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  /* z-index: 0; */
  overflow: hidden;
`;

export const ErrorWrap = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
`;
export const ErrorWrap1 = styled.div`
  /* margin-top: -5rem; */
  /* display: flex; */
  /* justify-content: flex-end; */
  align-items: center;
`;

export const ImgWrap = styled.div`
  /* align-items: center; */
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 70%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ErrorP = styled.p`
  /* display: flex; */
  /* justify-content: flex-end; */
  font-size: 2.5rem;
  font-weight: bold;
`;

export const ErrorBtn = styled.button`
  color: #fff;
  font-size: 1.2rem;
  background-color: #4ab29c;
  padding: 1rem 1rem;
  border: none;
  border-radius: 10px;

  :hover {
    background-color: #3f9986;
  }
`;

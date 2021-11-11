import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#2D6673" : "#7C9AA6 ")};

  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px " : "30px 12px ")};

  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "10px" : "20px")};
  font-family: Andale Mono;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#9FB6BF" : "#1F2326")};
  }
`;

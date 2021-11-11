import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#032026" : "#032026")};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24 px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #9fb6bf;
  font-family: Andale Mono;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  font-family: Andale Mono;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  font-family: Andale Mono;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  margin: 0.5rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #80a6a2;
  }
`;

export const NavLinks1 = styled(LinkR)`
  text-decoration: none;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtn1 = styled.span`
  border-radius: 20px;
  background: #2d6673;
  white-space: nowrap;
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  font-family: Andale Mono;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #2d6673;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #2d6673;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  font-family: Andale Mono;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #2d6673;
  }
`;

export const NavBtnLink1 = styled(LinkR)`
  color: #fff;
  font-family: Andale Mono;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  margin: 0.5rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #80a6a2;
  }
`;

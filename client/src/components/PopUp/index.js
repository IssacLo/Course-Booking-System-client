import React, { useState } from "react";
import {
  PopUpBackground,
  PopUpContainer,
  PopUpCloseBtn,
  PopUpCloseBtn1,
  PopUpTitle,
  PopUpH1,
  PopUpFooter,
  PopUpBtn,
} from "./PopUpElement";
import AuthService from "../../services/auth.service";
import { useHistory } from "react-router-dom";

const PopUp = (props) => {
  console.log(props, "props");
  let { currentUser, setCurrentUser } = props;
  let { open, setOpen } = props;

  const history = useHistory();

  const handleLogout = () => {
    AuthService.logout();
    // window.alert("Logout Successfully,now you are redirect to homepage ");
    setCurrentUser(null);
    history.push("/");
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PopUpBackground>
        <PopUpContainer>
          <PopUpCloseBtn>
            <PopUpCloseBtn1 onClick={handleClose}>x</PopUpCloseBtn1>
          </PopUpCloseBtn>
          <PopUpTitle>
            <PopUpH1>Are You Sure To Logout?</PopUpH1>
          </PopUpTitle>
          <PopUpFooter>
            <PopUpBtn onClick={handleClose}>Cancel</PopUpBtn>
            <PopUpBtn onClick={handleLogout}>Sign Out</PopUpBtn>
          </PopUpFooter>
        </PopUpContainer>
      </PopUpBackground>
    </>
  );
};

export default PopUp;

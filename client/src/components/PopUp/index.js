import React, { useState } from "react";
import {
  PopUpBackground,
  PopUpContainer,
  PopUpCloseBtn,
  PopUpCloseBtn1,
  PopUpTitle,
  PopUpH1,
  PopUpFooter,
  PopUpBtn1,
  PopUpBtn2,
  LineLogout,
  Logout,
  PopUpP,
} from "./PopUpElement";
import AuthService from "../../services/auth.service";
import { useHistory } from "react-router-dom";

const PopUp = (props) => {
  console.log(props, "props");
  let { currentUser, setCurrentUser } = props;
  let { open, setOpen } = props;
  const [hover, setHover] = useState(false);

  const history = useHistory();

  const onHover = () => {
    setHover(!hover);
  };
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
          <PopUpTitle>
            {hover ? <LineLogout /> : <Logout />}
            <PopUpH1> Sign Out</PopUpH1>
          </PopUpTitle>
          <PopUpP>Are You Sure To Sign Out?</PopUpP>
          {/* <PopUpFooter> */}
          <PopUpBtn1 onClick={handleClose}>Cancel</PopUpBtn1>
          <PopUpBtn2 onClick={handleLogout} onMouseEnter={onHover} onMouseLeave={onHover}>
            Sign Out
          </PopUpBtn2>
          {/* </PopUpFooter> */}
        </PopUpContainer>
      </PopUpBackground>
    </>
  );
};

export default PopUp;

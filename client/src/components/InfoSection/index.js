import React, { useState } from "react";
import Video from "../video/video.mp4";
// import { Button } from "../ButtonElements";
import Icon1 from "../images/svg-17.svg";
import Icon2 from "../images/svg-18.svg";
import Icon3 from "../images/svg-11.svg";
import Icon4 from "../images/svg-15.svg";
import Icon5 from "../images/svg-13.svg";
import Icon6 from "../images/svg-14.svg";
import Icon7 from "../images/svg-16.svg";
// import { Link as LinkS } from "react-scroll";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroH3,
  HeroP,
  LinkScroll,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
  InfoContainer1,
  InfoContainer2,
  InfoWrapper,
  InfoRow1,
  InfoRow2,
  Column1,
  Column2,
  TextWrapper,
  TopLine1,
  TopLine2,
  Heading1,
  Heading2,
  Subtitle1,
  Subtitle2,
  BtnWrap,
  ImgWrap,
  Img,
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./InfoElement";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  to,
  currentUser,
  setCurrentUser,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Stay Hungry,</HeroH1>
          <HeroH2>Stay Foolish.</HeroH2>

          {/* <HeroP>XXxXXXXxXxxxxx XXXXXXxx xXXXXXXX XXXXXXXXX</HeroP> */}
          <HeroBtnWrapper>
            <Button
              // to="about"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
            >
              <LinkScroll
                to="about"
                // onMouseEnter={onHover}
                // onMouseLeave={onHover}
                // primary="true"
                // dark="true"
              >
                See how it works {hover ? <ArrowForward /> : <ArrowRight />}
              </LinkScroll>
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
      <InfoContainer1 id="about">
        <InfoWrapper>
          <InfoRow1>
            <Column1>
              <TextWrapper>
                <TopLine1>Booking System</TopLine1>
                <Heading1>Booking A Course May Easy</Heading1>
                <Subtitle1>Are You Instructor? Or Student?</Subtitle1>
                <BtnWrap>
                  {!currentUser && (
                    <Button
                      to="/signup"
                      smooth={true}
                      duration={550}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 0 : 1}
                      dark={dark ? 0 : 1}
                      dark2={dark2 ? 0 : 1}
                    >
                      Get Started
                    </Button>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Icon1} alt="Course" />
              </ImgWrap>
            </Column2>
          </InfoRow1>
        </InfoWrapper>
      </InfoContainer1>
      <InfoContainer2 id="instructor">
        <InfoWrapper>
          <InfoRow2>
            <Column1>
              <TextWrapper>
                <TopLine2>As an Instructor</TopLine2>
                <Heading2>Post Your Course In Any Time</Heading2>
                <Subtitle2>
                  You can become an instructor by registering as one, and start making online
                  courses
                </Subtitle2>
                <BtnWrap>
                  {!currentUser && (
                    <Button
                      to="/signup"
                      smooth={true}
                      duration={550}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      Start Now
                    </Button>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Icon4} alt="Course" />
              </ImgWrap>
            </Column2>
          </InfoRow2>
        </InfoWrapper>
      </InfoContainer2>
      <InfoContainer1 id="student">
        <InfoWrapper>
          <InfoRow1>
            <Column1>
              <TextWrapper>
                <TopLine1>As a Student</TopLine1>
                <Heading1>Find Your Course In Anytime</Heading1>
                <Subtitle1>
                  You can become a student by registering as one, and start to join the course
                </Subtitle1>
                <BtnWrap>
                  {!currentUser && (
                    <Button
                      to="/signup"
                      smooth={true}
                      duration={550}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 0 : 1}
                      dark={dark ? 0 : 1}
                      dark2={dark2 ? 0 : 1}
                    >
                      Get Started
                    </Button>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Icon2} alt="Course" />
              </ImgWrap>
            </Column2>
          </InfoRow1>
        </InfoWrapper>
      </InfoContainer1>
      <ServicesContainer id="services">
        {/* <ServicesH1>XXXXXXX </ServicesH1> */}
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>Post Course</ServicesH2>
            <ServicesP>As an Instructor</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Enroll Course</ServicesH2>
            <ServicesP>As a Student</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH2>Search Course</ServicesH2>
            <ServicesP>As a Student</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
      <InfoContainer2 id="signup">
        <InfoWrapper>
          <InfoRow2>
            <Column1>
              <TextWrapper>
                <TopLine2>Booking System</TopLine2>
                <Heading2>JOIN US !</Heading2>
                <Subtitle2>Become our member in 1 step</Subtitle2>
                <BtnWrap>
                  {!currentUser && (
                    <Button
                      to="/signup"
                      smooth={true}
                      duration={550}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      Get Started
                    </Button>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Icon7} alt="Course" />
              </ImgWrap>
            </Column2>
          </InfoRow2>
        </InfoWrapper>
      </InfoContainer2>
    </>
  );
};

export default InfoSection;

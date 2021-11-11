import React, { useState } from "react";
import Video from "../video/video.mp4";
// import { Button } from "../ButtonElements";
import Icon1 from "../images/svg-1.svg";
import Icon2 from "../images/svg-2.svg";
import Icon3 from "../images/svg-3.svg";
import Icon4 from "../images/svg-4.svg";
import Icon5 from "../images/svg-5.svg";
import Icon6 from "../images/svg-6.svg";
// import { Link as LinkS } from "react-scroll";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
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
  TopLine,
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
          <HeroH1>Booking A Course Made Easy</HeroH1>
          <HeroP>XXxXXXXxXxxxxx XXXXXXxx xXXXXXXX XXXXXXXXX</HeroP>
          <HeroBtnWrapper>
            <Button
              // to="about"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
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
                <TopLine>Learning System</TopLine>
                <Heading1>"XXXXXXXXXXXX"</Heading1>
                <Subtitle1>
                  This system is using React.js as front-end framework, and Node.js, MongoDB as
                </Subtitle1>
                <BtnWrap>
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
                <TopLine>As an Instructor</TopLine>
                <Heading2>Post Your Course In Any Time</Heading2>
                <Subtitle2>
                  TYou can become an instructor by registering as one, and start making online
                  courses
                </Subtitle2>
                <BtnWrap>
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
                <TopLine>Learning System</TopLine>
                <Heading1>"XXXXXXXXXXXX"</Heading1>
                <Subtitle1>
                  This system is using React.js as front-end framework, and Node.js, MongoDB as
                </Subtitle1>
                <BtnWrap>
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
        <ServicesH1>XXXXXXX </ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH2>ZZZZZZZZ</ServicesH2>
            <ServicesP>xxxxxxxx</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>ZZZZZZZZ</ServicesH2>
            <ServicesP>xxxxxxxx</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>ZZZZZZZZ</ServicesH2>
            <ServicesP>xxxxxxxx</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
      <InfoContainer1 id="signup">
        <InfoWrapper>
          <InfoRow1>
            <Column1>
              <TextWrapper>
                <TopLine>Learning System</TopLine>
                <Heading1>"XXXXXXXXXXXX"</Heading1>
                <Subtitle1>
                  This system is using React.js as front-end framework, and Node.js, MongoDB as
                </Subtitle1>
                <BtnWrap>
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
      {/* <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={to}
                    smooth={true}
                    duration={550}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> */}
    </>
  );
};

export default InfoSection;

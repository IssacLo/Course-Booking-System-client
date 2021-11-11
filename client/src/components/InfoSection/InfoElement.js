import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
  // Add:before: style
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  font-family: Andale Mono;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  font-family: Andale Mono;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

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
// export const InfoContainer = styled.div`
//   color: #80a6a2;
//   background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#CCD9D7")};

//   @media screen and (max-width: 768px) {
//     padding: 100px 0;
//   }
// `;

export const InfoContainer1 = styled.div`
  color: #80a6a2;
  background: #ccd9d7;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoContainer2 = styled.div`
  color: #80a6a2;
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

// export const InfoRow = styled.div`
//   display: grid;
//   grid-auto-columns: minmax(auto, 1fr);
//   align-items: center;
//   grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

//   @media screen and (max-width: 768px) {
//     grid-template-areas: ${({ imgStart }) =>
//       imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
//   }
// `;

export const InfoRow1 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col2";
  }
`;

export const InfoRow2 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col2 col1";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: #032026;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

// export const Heading = styled.h1`
//   margin-bottom: 24px;
//   font-size: 48px;
//   /* color: black; */
//   line-height: 1.1;
//   font-weight: 600;
//   color: ${({ lightText }) => (lightText ? "#36594F" : "#032026")};

//   @media screen and (max-width: 480px) {
//     font-size: 32px;
//   }
// `;

export const Heading1 = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  /* color: black; */
  line-height: 1.1;
  font-weight: 600;
  color: #36594f;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Heading2 = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  /* color: black; */
  line-height: 1.1;
  font-weight: 600;
  color: #032026;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

// export const Subtitle = styled.p`
//   max-width: 440px;
//   margin-bottom: 35px;
//   font-size: 18px;
//   line-height: 24px;
//   color: ${({ darkText }) => (darkText ? "#010606" : "#032026")};
// `;

export const Subtitle1 = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
`;
export const Subtitle2 = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #032026;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

// export const Button = styled(Link)`
//   display: flex;
// `;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #ccd9d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const LinkScroll = styled(LinkS)`
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

import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Coursement
            </SocialLogo>
            <WebsiteRights>
              Coursement © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook"></SocialIconLink>
              <FaFacebook />
              <SocialIconLink href="/" target="_blank" aria-label="Instagram"></SocialIconLink>
              <FaInstagram />
              <SocialIconLink
                href="//www.youtube.com"
                target="_blank"
                aria-label="Youtube"
              ></SocialIconLink>
              <FaYoutube />
              <SocialIconLink href="/" target="_blank" aria-label="Twitter"></SocialIconLink>
              <FaTwitter />
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin"></SocialIconLink>
              <FaLinkedin />
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

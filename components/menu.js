import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { isBrowser } from "react-device-detect";
import { LinkStyles, BmItem, BmItemDiv, MenuLink, BmOverlay } from '../styles/styles'
import Image from 'next/image'

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "30px",
    right: "10px",
    top: "10px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    right: "20px",
    top: "20px"
  },
  bmCross: {},
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0"
  },
  bmMenu: {
    background: "#d3d3cc",
    width: "100%",
    padding: "150px 0 0 0"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "black",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly"
  },
  bmItem: {
    display: "inline-block",
    outline: "none",
    width: "max-content",
    alignSelf: "flex-start"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};


const Line = (
  <svg
    width='60'
    height='5'
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    className='scale-in-left'
  >
    <line
      x1='40'
      x2='5'
      y1='5'
      y2='5'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='butt'
    />
  </svg>
)


const Layout = () => {
  const [showServices, setShowServices] = useState(false);
  const [showManufacturing, setShowManufacturing] = useState(false);
  const [runEffect, setEffect] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [menuAnimation, setMenAnimation] = useState(false);
  const [home, setHome] = useState(false);

  const setShowServicesFx = () => {
    setShowServices(true);
    setShowManufacturing(false);
  };

  const setShowManufacturingFx = () => {
    setShowServices(false);
    setShowManufacturing(true);
  };

  const circleAnimation = () => {
    setMenAnimation(true);
    setTimeout(function () {
      setOpenMenu(true);
    }, 3000);
  };

  const serviceMenu = (
    <div
      className="Menufade"
      style={{ padding: "30px 0" }}
    >

      {Line}<LinkStyles href="/pattern-making">PATTERN MAKING</LinkStyles>
      <p></p>
      {Line}<LinkStyles href="/fabric-trim-sourcing"> FABRIC & TRIM SOURCING </LinkStyles>
      <p></p>
      {Line}<LinkStyles href="/apparel-production">APPAREL PRODUCTION</LinkStyles>
      <p></p>
      {Line}<LinkStyles href="/shipping"> SHIPPING</LinkStyles>
      <p></p>
      {Line}<LinkStyles href="/photography">PHOTOGRAPHY</LinkStyles>
    </div>
  );

  const manufacturingMenu = (
    <div
      className="Menufade"
      style={{ padding: isBrowser ? "10px 0 0 0" : "16px 0 0 0" }}
    >
      {Line}<LinkStyles href="/cmt">CMT</LinkStyles>
      <p></p>
      {Line}<LinkStyles href="/manufacturing-fpp">FPP</LinkStyles>
    </div>
  );

  return (
    <>
      <div className={menuAnimation ? "circle-animation" : ""} />
      <Menu
        isOpen={openMenu}
        className={runEffect ? "slide-out-top" : null}
        width={"100%"}
        styles={styles}
        customBurgerIcon={
          <img
            src="/images/signs.png"
            className="heartbeat"
            onClick={() => circleAnimation()}
          />
        }
        customCrossIcon={<img src="/images/cross.png" />}
      >
        <BmOverlay>
          <BmItemDiv
            className="menu_effects"
            onClick={() => setShowManufacturingFx(true)}
          >
            MANUFACTURING
            </BmItemDiv>
          {showManufacturing ? manufacturingMenu : null}

          <BmItemDiv
            className="menu_effects"
            onClick={() => setShowServicesFx()}
          >
            DEVELOPMENT SERVICES
            </BmItemDiv>
          {showServices ? serviceMenu : null}

          <MenuLink href="/gallery">
            <BmItemDiv>
              GALLERY
            </BmItemDiv>
          </MenuLink>

          <MenuLink href="/contact">
            <BmItemDiv>
              CONTACT
            </BmItemDiv>
          </MenuLink>

          <MenuLink
            href="/about"
            className="menu_effects"
          >
            <BmItemDiv>
              ABOUT
            </BmItemDiv>
          </MenuLink>

          <MenuLink
            href="/faq"
            className="menu_effects"
          >
            <BmItemDiv>
              FAQ
            </BmItemDiv>
          </MenuLink>


          <a href="https://www.instagram.com/faktorylaboratorio/">
            <Image src="/images/instagram.png" width={30} height={30} />
          </a>
        </BmOverlay>
      </Menu>
    </>
  );
};

export default Layout;

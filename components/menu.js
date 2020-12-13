import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { isBrowser } from "react-device-detect";
import { LinkStyles, BmItem, BmItemLink, BmOverlay } from '../styles/styles'
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

const mobileStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "30px",
    right: "15px",
    top: "13px"
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
    display: "flex",
    width: "100%"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "black",
    padding: "0.8em",
    width: "100%"
  },
  bmItem: {
    display: "inline-block",
    outline: "none",
    width: "max-content",
    margin: "0 0 0 16px",
    lineHeight: "3em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    display: "flex"
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
      <Link href="/pattern-making">
        <LinkStyles>{Line} PATTERN MAKING</LinkStyles>
      </Link>
      <Link href="/fabric-trim-sourcing">
        <LinkStyles >
          {Line} FABRIC & TRIM SOURCING
        </LinkStyles>
      </Link>
      <Link href="/apparel-production">
        <LinkStyles>{Line} APPAREL PRODUCTION</LinkStyles>
      </Link>

      <Link href="/shipping">
        <LinkStyles> {Line} SHIPPING</LinkStyles>
      </Link>

      <Link href="/photography">
        <LinkStyles>{Line} PHOTOGRAPHY</LinkStyles>
      </Link>
    </div>
  );

  const manufacturingMenu = (
    <div
      className="Menufade"
      style={{ padding: isBrowser ? "10px 0 0 0" : "16px 0 0 0" }}
    >
      <Link
        href="/cmt"
        style={{ display: "block" }}
      >
        <LinkStyles>{Line}CMT</LinkStyles>
      </Link>
      <Link
        href="/manufacturing-fpp"
        style={{ display: "block" }}
      >
        <LinkStyles>{Line}FPP</LinkStyles>
      </Link>
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
          <BmItem
            className="menu_effects"
            onClick={() => setShowServicesFx()}
          >
            DEVELOPMENT SERVICES
            </BmItem>
          {showServices ? serviceMenu : null}

          <BmItem
            className="menu_effects"
            onClick={() => setShowManufacturingFx(true)}
          >
            MANUFACTURING
            </BmItem>
          {showManufacturing ? manufacturingMenu : null}

          <Link
            href="/contact"
            style={{ display: "block" }}
            className="menu_effects"
            passHref
          >
            <BmItemLink>
              CONTACT
                </BmItemLink>
          </Link>


          <Link
            href="/about"
            style={{ display: "block" }}
          >
            <BmItemLink
              className="menu_effects"
            >
              ABOUT
            </BmItemLink>
          </Link>

          <Link
            href="/faq"
            style={{ display: "block" }}
          >
            <BmItemLink
              className="menu_effects"
            >
              FAQ
            </BmItemLink>
          </Link>

          <a href="https://www.instagram.com/faktorylaboratorio/">
            <Image src="/images/instagram.png" width={30} height={30} />
          </a>
        </BmOverlay>
      </Menu>
    </>
  );
};

export default Layout;

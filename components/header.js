import React, { useState, useEffect } from "react";
import Menu from "./menu";
import { LogoImage } from '../styles/styles';
import Link from "next/link";
import Image from "next/image";

const Header = ({ siteTitle, description2 }) => {
  const [home, setHome] = useState(false);
  const [css, setCss] = useState({
    background: 'white',
  })

  useEffect(() => {
    console.log(
      " window.location.pathname.split('/')",
      window.location.pathname.split("/")
    );
    const pathName = window.location.pathname.split("/");
    if (pathName[1] === "") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction)

    return () =>
      window.removeEventListener('scroll', scrollFunction)
  }, [])

  const scrollFunction = () => {
    if (window.scrollY > 50) {
      setCss({
        background: 'white'
      })
    } else {
      setCss({
        background: 'white'
      })
    }
  }

  return (
    <header>
      <div
        style={{
          margin: `0 auto`,
          position: "fixed",
          top: '0',
          left: '0',
          right: '0',
          width: "100%",
          height: "70px",
          background: css.background,
          zIndex: '30'
        }}
      >
        <Link href="/">
          <LogoImage>
            <Image
              src="/images/faktory.png"
              width={150}
              height={50}
            />
          </LogoImage>
        </Link>
        <p
          style={{
            color: `black`,
            textDecoration: `none`,
            position: "absolute",
            left: "5%",
            top: "10%"
          }}
        >
          {description2}
        </p>
      </div>
      <Menu />
    </header>
  );
};

export default Header;

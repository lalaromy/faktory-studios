import React, { useState, useEffect } from "react";
import {
  FooterItems,
  FooterItemsTitle,
  FooterAnchor,
  FooterContainer,
  Footer1,
  Footer2,
  Footer3,
  Footer4
} from "../styles/styles";
import Header from "./header";
import Menu from "./menu";
import text from "../data/home.json";
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children }) => {
  const [home, setHome] = useState(false);

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

  const dataProduction = [
    {
      headline: text.CMT,
      link: '/cmt'
    },
    {
      headline: text.FPP,
      link: '/manufacturing-fpp'
    },
    {
      headline: text.PATTERN_MAKING,
      link: '/pattern-making'
    },
    {
      headline: text.FABRIC_TRIM,
      link: '/fabric-trim-sourcing'
    },
    {
      headline: text.APPAREL_PRODUCTION,
      link: '/apparel-production'
    },
    {
      headline: text.PHOTOGRAPHY,
      link: '/photography'
    },
    {
      headline: text.SHIPPING,
      link: '/shipping'
    },
    {
      headline: text.E_COMMERCE,
      link: '/'
    },
  ]

  return (
    <>
      <Header siteTitle={"Faktory Studios"}>
        <Menu />
      </Header>
      <main>
        {children}
      </main>
      <FooterContainer>
        <Footer1>
          <Image src="/images/faktory.png" width={100} height={30} />
          <div style={{ height: '12px' }} />
          <Image src="/images/faktory_laboratorio.png" width={100} height={50} />
          <Image src="/images/faktory_tissus2.png" width={100} height={50} />

          <a href="https://www.instagram.com/faktorylaboratorio/">
            <Image src="/images/instagram.png" width={30} height={30} />
          </a>
        </Footer1>

        <Footer2>
          <FooterItemsTitle>CONTACT</FooterItemsTitle>
          <FooterAnchor href="mailto:mailto:office@faktory-studios.com">INFO EMAIL</FooterAnchor>
          <p></p>
          <FooterAnchor href="mailto:angie@faktory-studios.com">FOUNDER EMAIL</FooterAnchor>
          <FooterItems>
            OBILAZNI PUT BB
          </FooterItems>
          <FooterItems>
            SERBIA
          </FooterItems>
          <FooterItems>
            15353 MAJUR
          </FooterItems>
        </Footer2>

        <Footer3>
          <FooterItemsTitle>SERVICES</FooterItemsTitle>
          {dataProduction.map((item, key) => (
            <Link href={item.link}>
              <FooterItems>
                {item.headline}
              </FooterItems>
            </Link>
          ))}
        </Footer3>

        <Footer4>
          <p></p>
          <FooterAnchor>PRIVACY POLICY</FooterAnchor>
          <p></p>
          <FooterAnchor>COPYRIGHT</FooterAnchor>
        </Footer4>
      </FooterContainer>

    </>
  );
};

export default Layout;

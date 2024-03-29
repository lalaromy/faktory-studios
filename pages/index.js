import React, { useState } from "react";
import {
  HomeHeadline,
  HomeSubheadline,
  HomeText,
  HomeArrow,
  HomeKeyValues,
  HomeMore,
  ImageContainer,
  HeroContainer,
  HeroTitle,
  HomeLayout,
  Box1,
  BoxContainer,
  Box2,
  Box3,
  Box4,
} from "../styles/styles";
import Layout from "../components/layout";
import text from "../data/home.json";
import Image from "next/image";
import Head from "next/head";

const IndexPage = () => {
  const [detailsOpen, setDetailsOpen] = useState(0);
  const Line = (
    <svg
      width="60"
      height="10"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="scale-in-left mt-4"
    >
      <line
        x1="40"
        x2="5"
        y1="5"
        y2="5"
        stroke="#CEC6B6"
        strokeWidth="2"
        strokeLinecap="butt"
      />
    </svg>
  );

  const dataProduction = [
    {
      headline: text.CMT,
      text: text.CMT_TEXT,
      link: "/cmt",
    },
    {
      headline: text.FPP,
      text: text.FPP_TEXT,
      link: "/manufacturing-fpp",
    },
    {
      headline: text.PATTERN_MAKING,
      text: text.PATTER_MAKING_TEXT,
      link: "/pattern-making",
    },
    {
      headline: text.FABRIC_TRIM,
      text: text.FABRIC_TRIM_TEXT,
      link: "/fabric-trim-sourcing",
    },
    {
      headline: text.APPAREL_PRODUCTION,
      text: text.APPAREL_PRODUCTION_TEXT,
      link: "/apparel-production",
    },
    {
      headline: text.PHOTOGRAPHY,
      text: text.PHOTOGRAPHY_TEXT,
      link: "/photography",
    },
    {
      headline: text.SHIPPING,
      text: text.SHIPPING_TEXT,
      link: "/shipping",
    },
    {
      headline: text.E_COMMERCE,
      text: text.E_COMMERCE_TEXT,
      link: "/",
    },
  ];

  const dataValues = [
    text.keyfactor1,
    text.keyfactor2,
    text.keyfactor3,
    text.keyfactor4,
    text.keyfactor5,
  ];

  const dataServices = [
    text.SERVICES1,
    text.SERVICES2,
    text.SERVICES3,
    text.SERVICES4,
    text.SERVICES5,
    text.SERVICES6,
  ];

  return (
    <div>
      <Head>
        <title>FAKTORY STUDIOS | Serbia Europe</title>
        <meta
          name="description"
          content={
            "Faktory Studios is the one-stop enterprise where one can discover that the production process was never as enjoyable as it is now - the design, sourcing, manufacturing and shipping as four phases we take care of the full process, letting the client focus on other parts of a fashion business. With the lowest minimum quantities, one can find on the market, we offer our clients an ability to react quickly on the market needs or trying new product styles, without risking ending up with too much left-over stock."
          }
        />
        <meta property="og:title" content={`FAKTORY STUDIOS`} />
        <meta
          property="og:description"
          content="Faktory Studios is the one-stop enterprise where one can discover that the production process was never as enjoyable as it is now - the design, sourcing, manufacturing and shipping as four phases we take care of the full process, letting the client focus on other parts of a fashion business. With the lowest minimum quantities, one can find on the market, we offer our clients an ability to react quickly on the market needs or trying new product styles, without risking ending up with too much left-over stock."
        />
        <meta
          property="og:image"
          content="https://faktory-studios.com/logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:url" content="http://faktory-studios.com/" />
      </Head>

      <Layout>
        <HeroContainer>
          <Image src="/home/home1.jpg" layout="fill" objectFit="cover" />
          <HeroTitle>{text.keyfactor}</HeroTitle>
        </HeroContainer>

        <HomeLayout>
          <div />
          <Box1 className="swingging">
            <HomeHeadline>{text.WHAT_WE_DO}</HomeHeadline>
          </Box1>
          <BoxContainer>
            {dataProduction.map((el, key) => (
              <>
                <Box2 key={key} onClick={() => setDetailsOpen(key)}>
                  {/* <HomeArrow src="/images/arrow.png" height={15} width={15} style={{ transform: detailsOpen === key ? 'rotate(90deg)' : '' }} /> */}
                  <HomeSubheadline
                    style={{ color: detailsOpen === key ? "black" : "" }}
                  >
                    {el.headline}
                  </HomeSubheadline>
                </Box2>
                <Box3
                  style={{
                    paddingBottom: detailsOpen === key ? "30px" : "",
                    transition: detailsOpen === key ? "0.5s linear" : "",
                  }}
                >
                  {detailsOpen === key ? (
                    <>
                      <HomeText className="fade-in-left">{el.text}</HomeText>
                      <p></p>
                      <span className="fade-in-left">{Line}</span>
                      <HomeMore href={el.link} className="fade-in-left">
                        {text.MORE}
                      </HomeMore>
                    </>
                  ) : null}
                </Box3>
              </>
            ))}
          </BoxContainer>
          <div />
        </HomeLayout>

        <HomeLayout>
          <div />
          <Box1 className="swingging">
            <HomeHeadline>{text.WHAT_WE_STAND_FOR}</HomeHeadline>
          </Box1>
          <BoxContainer>
            {dataValues.map((el, key) => (
              <>
                <Box2 key={key}>
                  <HomeKeyValues>{el}</HomeKeyValues>
                </Box2>
                <Box3></Box3>
              </>
            ))}
          </BoxContainer>
        </HomeLayout>
        <ImageContainer>
          <Image src="/home/home2.jpg" layout="fill" objectFit="cover" />
        </ImageContainer>

        <HomeLayout>
          <div />
          <Box1 className="swingging">
            <HomeHeadline>{text.ABOUT_US}</HomeHeadline>
          </Box1>
          <BoxContainer>
            <Box4>
              <HomeText>{text.ABOUT_TEXT}</HomeText>
              <p></p>
              <span>{Line}</span>
              <HomeMore href="/about">{text.MORE}</HomeMore>
            </Box4>
          </BoxContainer>
          <div />
        </HomeLayout>

        <HomeLayout>
          <div />
          <Box1 className="swingging">
            <HomeHeadline>{text.OTHER_SERVICES}</HomeHeadline>
          </Box1>
          <BoxContainer>
            {dataServices.map((el, key) => (
              <>
                <Box2 key={key}>
                  <HomeKeyValues>{el}</HomeKeyValues>
                </Box2>
                <Box3></Box3>
              </>
            ))}
          </BoxContainer>
          <div />
        </HomeLayout>

        <HomeLayout>
          <div />
          <Box1 className="swingging">
            <HomeHeadline>{text.ETHICAL}</HomeHeadline>
          </Box1>
          <BoxContainer>
            <Box4>
              <HomeText>{text.ETHICAL_TEXT}</HomeText>
              <p></p>
              <span>{Line}</span>
            </Box4>
          </BoxContainer>
          <div />
        </HomeLayout>
        <HomeLayout>
          <div />
          <Box1 className="swingging">
            <HomeHeadline>{text.SUSTAINABLE}</HomeHeadline>
          </Box1>
          <BoxContainer>
            <Box4>
              <HomeText>{text.SUSTAINABLE_TEXT}</HomeText>
              <p></p>
              <span>{Line}</span>
            </Box4>
          </BoxContainer>
          <div />
        </HomeLayout>
        <ImageContainer>
          <Image src="/home/home3.jpg" layout="fill" objectFit="cover" />
        </ImageContainer>
      </Layout>
    </div>
  );
};

export default IndexPage;

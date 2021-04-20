import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";
import {
  WrapperNextButton,
  Headline,
  ImagePageContainer,
  PageLayout,
  BoxContainer,
  Box1,
  Box22,
  Box33,
  Text,
  ImageContainer,
} from "../styles/styles";
import aboutText from "../data/about.json";
import apparelText from "../data/apparel.json";
import cmtText from "../data/cmt.json";
import fabricTrimText from "../data/fabric-trim.json";
import fppText from "../data/fpp.json";
import patternText from "../data/pattern-making.json";
import photographyText from "../data/photography.json";
import shippingText from "../data/shipping.json";
import Image from "next/image";
import Head from "next/head";

const Pages = () => {
  const [currentPath, setCurrentPath] = useState();
  const pageRef = useRef(null);
  const router = useRouter();
  const { pid } = router.query;

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

  const data = [
    {
      index: 1,
      url: "cmt",
      image: "/images/cmt.jpg",
      headline: cmtText.headline.toUpperCase(),
      subheadline: cmtText.subheadline.toUpperCase(),
      text: [
        cmtText.paragraph1.toUpperCase(),
        cmtText.paragraph2.toUpperCase(),
      ],
      nextUrl: "manufacturing-fpp",
      nextName: "FPP",
    },
    {
      index: 2,
      url: "manufacturing-fpp",
      image: "/images/fpp.jpg",
      headline: fppText.headline.toUpperCase(),
      subheadline: fppText.subheadline.toUpperCase(),
      text: [
        fppText.subheadline.toUpperCase(),
        fppText.paragraph2.toUpperCase(),
      ],
      nextUrl: "pattern-making",
      nextName: "PATTERN MAKING",
    },

    {
      index: 3,
      url: "pattern-making",
      image: "/images/pattern.jpg",
      headline: patternText.headline.toUpperCase(),
      // subheadline: patternText.subheadline.toUpperCase(),
      text: [
        patternText.paragraph1.toUpperCase(),
        patternText.paragraph2.toUpperCase(),
        patternText.paragraph3.toUpperCase(),
      ],
      nextUrl: "fabric-trim-sourcing",
      nextName: "FABRIC TRIM SOURCING",
    },
    {
      index: 4,
      url: "fabric-trim-sourcing",
      image: "/images/fabric.jpg",
      headline: fabricTrimText.headline.toUpperCase(),
      // subheadline: fabricTrimText.subheadline.toUpperCase(),
      text: [
        fabricTrimText.paragraph1.toUpperCase(),
        fabricTrimText.paragraph2.toUpperCase(),
      ],
      nextUrl: "apparel-production",
      nextName: "APPAREL PRODUCTION",
    },
    {
      index: 5,
      url: "apparel-production",
      image: "/images/apparel.jpg",
      headline: apparelText.headline.toUpperCase(),
      subheadline: apparelText.subheadline.toUpperCase(),
      text: [
        apparelText.paragraph1.toUpperCase(),
        apparelText.paragraph2.toUpperCase(),
        apparelText.paragraph3.toUpperCase(),
      ],
      nextUrl: "photography",
      nextName: "PHOTOGRAPHY",
    },
    {
      index: 6,
      url: "photography",
      image: "/images/photography.jpg",
      headline: photographyText.headline.toUpperCase(),
      subheadline: photographyText.subheadline.toUpperCase(),
      text: [
        photographyText.paragraph1.toUpperCase(),
        photographyText.paragraph2.toUpperCase(),
      ],
      nextUrl: "shipping",
      nextName: "SHIPPING",
    },
    {
      index: 7,
      url: "shipping",
      image: "/images/ship.jpg",
      headline: shippingText.headline.toUpperCase(),
      subheadline: shippingText.subheadline.toUpperCase(),
      text: [
        shippingText.paragraph1.toUpperCase(),
        shippingText.paragraph2.toUpperCase(),
      ],
      nextUrl: "about",
      nextName: "ABOUT",
    },
    {
      index: 8,
      url: "about",
      image: "/images/about.jpg",
      headline: aboutText.headline.toUpperCase(),
      subheadline: aboutText.subheadline.toUpperCase(),
      text: [
        aboutText.paragraph1.toUpperCase(),
        aboutText.paragraph2.toUpperCase(),
      ],
      nextUrl: "faq",
      nextName: "FAQ",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const path = window.location.pathname.split("/");
    setCurrentPath(path[1]);
  }, []);

  useEffect(() => {
    const path = window.location.pathname.split("/");
    setCurrentPath(path[1]);
  }, [pid]);

  return data.map((item) => {
    if (currentPath === item.url) {
      return (
        <div key={Date.now()}>
          <Head>
            <title>{item.headline} | Faktory Studios </title>

            <meta
              name="description"
              content={
                "Faktory Studios is the one-stop enterprise where one can discover that the production process was never as enjoyable as it is now - the design, sourcing, manufacturing and shipping as four phases we take care of the full process, letting the client focus on other parts of a fashion business. With the lowest minimum quantities, one can find on the market, we offer our clients an ability to react quickly on the market needs or trying new product styles, without risking ending up with too much left-over stock."
              }
            />
            <meta
              property="og:title"
              content={`${item.headline} | Faktory Studios Serbia Europe`}
            />
            <meta
              property="og:description"
              content="Faktory Studios is the one-stop enterprise where one can discover that the production process was never as enjoyable as it is now - the design, sourcing, manufacturing and shipping as four phases we take care of the full process, letting the client focus on other parts of a fashion business. With the lowest minimum quantities, one can find on the market, we offer our clients an ability to react quickly on the market needs or trying new product styles, without risking ending up with too much left-over stock."
            />
            <meta
              property="og:image"
              content={"https://faktory-studios.com/" + item.image}
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="600" />
            <meta
              property="og:url"
              content={"https://faktory-studios.com/" + currentPath}
            />
          </Head>

          <Layout ref={pageRef}>
            <PageLayout>
              <div />
              <Box1 className="swingging">
                <Headline>{item.headline}</Headline>
              </Box1>
              <Box22>
                {item.text.map((el) => (
                  <>
                    <Text>{el}</Text>
                    <p></p>
                  </>
                ))}
                {item.nextUrl ? (
                  <>
                    NEXT : __
                    <WrapperNextButton href={"/" + item.nextUrl}>
                      {item.nextName}
                    </WrapperNextButton>
                  </>
                ) : null}
              </Box22>
              <div />
              <Box33>
                <ImageContainer>
                  <Image src={item.image} layout="fill" objectFit="cover" />
                </ImageContainer>
              </Box33>
            </PageLayout>
          </Layout>
        </div>
      );
    }
  });
};

export default Pages;

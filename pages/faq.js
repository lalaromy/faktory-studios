import React, { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Layout from "../components/layout";
import {
  PageLayout,
  BoxContainer,
  Headline,
  Subheadline,
  Box1,
  Box22,
  Box3,
  Text,
  WrapperNextButton,
} from "../styles/styles";
import text from "../data/faq.json";
import Head from "next/head";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head>
        <title>FAQ | Faktory Studios Serbia Europe</title>
        <meta
          name="description"
          content={"Clothing apparel manufacturing in Serbia Europe"}
        />
        <meta property="og:title" content={`FAQ`} />
        <meta
          property="og:description"
          content="Clothing apparel manufacturing in Serbia Europe"
        />
        <meta property="og:url" content="http://faktory-studios.com/faq" />
      </Head>

      <Layout>
        <PageLayout>
          <div />
          <Box1 className="swingging">
            <Headline>
              <p>{text.headline.toUpperCase()}</p>
            </Headline>
          </Box1>
          <faqText>
            <Subheadline>{text.textheadline1}</Subheadline>
            <Text>{text.text1}</Text>

            <Subheadline>{text.textheadline2}</Subheadline>
            <Text>{text.text2}</Text>

            <Subheadline>{text.textheadline3}</Subheadline>
            <Text>{text.text3}</Text>

            <Subheadline>{text.textheadline4}</Subheadline>
            <Text>{text.text4}</Text>

            <Subheadline>{text.textheadline5}</Subheadline>
            <Text>{text.text5}</Text>

            <Subheadline>{text.textheadline6}</Subheadline>
            <Text>{text.text6}</Text>

            <Subheadline>{text.textheadline7}</Subheadline>
            <Text>{text.text7}</Text>

            <Subheadline>{text.textheadline8}</Subheadline>
            <Text>{text.text8}</Text>
            <p></p>
            <>
              NEXT : __
              <WrapperNextButton href={"/gallery"}>Gallery</WrapperNextButton>
            </>
          </faqText>
          <div />
        </PageLayout>
      </Layout>
    </div>
  );
};

export default Faq;

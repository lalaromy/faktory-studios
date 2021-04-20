import React, { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Address, Emails, EmailAnchor } from "../styles/styles";
import Layout from "../components/layout";
import {
  PageLayout,
  Headline,
  BoxContainer,
  Box1,
  Box22,
  Box3,
  Text,
} from "../styles/styles";
import text from "../data/contact.json";
import Head from "next/head";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head>
        <title>CONTACT | Faktory Studios Serbia Europe</title>
        <meta
          name="description"
          content={`Clothing apparel manufacturing in Serbia Europe`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`Contact`} />
        <meta
          property="og:description"
          content="Clothing apparel manufacturing in Serbia Europe"
        />
        <meta property="og:url" content="http://faktory-studios.com/contact" />
      </Head>
      <Layout>
        <PageLayout>
          <div />
          <Box1 className="swingging">
            <Headline>CONTACT</Headline>
          </Box1>
          <BoxContainer>
            <Box22>
              <Address>{text.adress1.toUpperCase()}</Address>
              <Address>{text.adress2.toUpperCase()}</Address>
              <Address>{text.adress3.toUpperCase()}</Address>
            </Box22>
            <Box3>
              <Emails>
                <a>INFO | </a>
                <EmailAnchor href="mailto:LABORATORIO@FAKTORY-STUDIOS.COM">
                  LABORATORIO@FAKTORY-STUDIOS.COM
                </EmailAnchor>
                <p></p>
                <a>FOUNDER | </a>
                <EmailAnchor href="mailto:ANGIE@FAKTORY-STUDIOS.COM">
                  ANGIE@FAKTORY-STUDIOS.COM
                </EmailAnchor>
                <p></p>
                <a>PRODUCTION TEAM |</a>
                <EmailAnchor href="mailto:aleksandra@faktory-studios.com">
                  {" "}
                  ALEKSANDRA@FAKTORY-STUDIOS.COM{" "}
                </EmailAnchor>
              </Emails>
              <p></p>
              <Emails>
                <EmailAnchor href="mailto:office@faktory-studios.com">
                  {" "}
                  EMAIL{" "}
                </EmailAnchor>
                <p></p>
                <EmailAnchor href="https://www.instagram.com/faktorylaboratorio/">
                  {" "}
                  INSTAGRAM{" "}
                </EmailAnchor>
                <p></p>
              </Emails>
            </Box3>
          </BoxContainer>
          <div />
        </PageLayout>
      </Layout>
    </div>
  );
};

export default Contact;

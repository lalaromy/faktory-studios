import React, { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Layout from "../components/layout";
import { PageLayout, GalleryContainer } from "../styles/styles";
import text from "../data/faq.json";
import Head from "next/head";
import Image from "next/image";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const images = ['1', '2', '3', '4', '5', '6']

  return (
    <div>
      <Head>
        <title>GALLERY | Faktory Studios Serbia Europe</title>
        <meta
          name="description"
          content={"Clothing apparel manufacturing in Serbia Europe"}
        />
        <meta property="og:title" content={`GALLERY`} />
        <meta
          property="og:description"
          content="Clothing apparel manufacturing in Serbia Europe"
        />
        <meta property="og:url" content="http://faktory-studios.com/gallery" />
      </Head>

      <Layout>
        {Array(33)
          .fill()
          .map((item, index) => (
            <GalleryContainer>
              <Image
                src={"/gallery/" + index + ".jpg"}
                layout="fill"
                objectFit="cover"
              />
            </GalleryContainer>
          ))}
      </Layout>
    </div>
  );
};

export default Faq;

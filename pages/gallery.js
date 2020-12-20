import React, { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Layout from "../components/layout";
import {
  PageLayout,
  GalleryContainer
} from "../styles/styles";
import text from "../data/faq.json";
import Head from 'next/head';
import Image from "next/image";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const images = ['1', '2', '3', '4', '5', '6']

  return (
    <div>
      <Head>
        <title>GALLERY | FAKTORY STUDIOS</title>
        <link rel='icon' type='image/png' href='/faktory.png' sizes='32x32' />
        <meta
          name='description'
          content={'FAKTORY STUDIOS | Manufacturing CMT FPP clothing apparel producer in Serbia Europe '}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          property='og:title'
          content={`FAKTORY STUDIOS | Clothing Manufacturing in Serbia Europe | CMT Serbia | FPP Serbia | Clothing Apparel producer in Serbia Europe | clothing manufacturing serbia | garment manufacturing serbia | apparel production serbia | pattern making serbia | fpp serbia | cmt serbia | fashion brand production serbia | cheap production europe | `}
        />
        <meta property='og:description' content='FAKTORY STUDIOS | Clothing apparel manufacturing in Serbia Europe' />
        <meta property='og:image' content='https://i.ibb.co/M5gspLj/FKT-Studios.png' />
        <meta property='og:image:secure_url' content='https://i.ibb.co/M5gspLj/FKT-Studios.png' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='640' />
        <meta property='og:image:height' content='442' />
        <meta property='og:url' content='http://faktory-studios.com/' />
      </Head>

      <Layout >

        {Array(24).fill().map((item, index) => (
          <GalleryContainer>
            <Image src={"/gallery/" + index + ".jpg"} layout="fill" objectFit="cover" />
          </GalleryContainer>
        ))}
      </Layout>
    </div>
  )
}

export default Faq;

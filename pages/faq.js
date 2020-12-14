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
    Text
} from "../styles/styles";
import text from "../data/faq.json";
import Head from 'next/head'

const Faq = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Head>
                <title>CONTACT | FAKTORY STUDIOS</title>
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
                <meta property='og:image' content='https://i.ibb.co/BqLShmz/Faktory-Studios-logo.png' />
                <meta property='og:image:secure_url' content='https://i.ibb.co/BqLShmz/Faktory-Studios-logo.png' />
                <meta property='og:image:type' content='image/jpeg' />
                <meta property='og:image:width' content='640' />
                <meta property='og:image:height' content='442' />
                <meta property='og:url' content='http://faktory-studios.com/' />
            </Head>

            <Layout >
                <PageLayout>
                    <div />
                    <Box1 className="swingging">
                        <Headline><p>{text.headline.toUpperCase()}</p></Headline>
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
                    </faqText>
                    <div />
                </PageLayout>
            </Layout>
        </div>
    )
}

export default Faq;

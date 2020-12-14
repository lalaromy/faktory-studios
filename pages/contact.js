import React, { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Address, Emails, EmailAnchor } from '../styles/styles';
import Layout from "../components/layout";
import {
    PageLayout,
    Headline,
    BoxContainer,
    Box1,
    Box22,
    Box3,
    Text
} from "../styles/styles";
import text from "../data/contact.json";
import Head from 'next/head'


const Contact = () => {
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
                    content={`FAKTORY STUDIOS | Manufacturing CMT FPP clothing apparel producer in Serbia Europe | cheap production europe | clothing manufacturing serbia | garment manufacturing serbia | apparel production serbia | pattern making serbia | fpp serbia | cmt serbia | fashion brand production serbia`}
                />
                <meta property='og:description' content='FAKTORY STUDIOS | Manufacturing CMT FPP clothing apparel producer in Serbia Europe ' />
                <meta property='og:image' content='https://i.ibb.co/BqLShmz/Faktory-Studios-logo.png' />
                <meta property='og:image:secure_url' content='https://i.ibb.co/BqLShmz/Faktory-Studios-logo.png' />
                <meta property='og:image:type' content='image/jpeg' />
                <meta property='og:image:width' content='640' />
                <meta property='og:image:height' content='442' />
                <meta property='og:url' content='http://faktory-studios.com/' />
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
                                <a>INFO | </a><EmailAnchor href="mailto:LABORATORIO@FAKTORY-STUDIOS.COM">LABORATORIO@FAKTORY-STUDIOS.COM</EmailAnchor>
                                <p></p>
                                <a>FOUNDER | </a><EmailAnchor href="mailto:ANGIE@FAKTORY-STUDIOS.COM">ANGIE@FAKTORY-STUDIOS.COM</EmailAnchor>
                                <p></p>
                                <a>PRODUCTION TEAM |</a><EmailAnchor href="mailto:IVANA@FAKTORY-STUDIOS.COM">  IVANA@FAKTORY-STUDIOS.COM</EmailAnchor>
                            </Emails>
                            <p></p>
                            <Emails>
                                <EmailAnchor href="mailto:office@faktory-studios.com"> EMAIL </EmailAnchor>
                                <p></p>
                                <EmailAnchor href="https://www.instagram.com/faktorylaboratorio/"> INSTAGRAM </EmailAnchor>
                                <p></p>
                            </Emails>
                        </Box3>
                    </BoxContainer>
                    <div />
                </PageLayout>
            </Layout>
        </div>
    )
}


export default Contact;




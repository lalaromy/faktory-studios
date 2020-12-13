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


const Faq = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
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
    )
}

export default Faq;

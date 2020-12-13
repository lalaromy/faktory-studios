import React, { useEffect } from "react";
import { HomeRight, HomeRightMobile, HomeLeft, HomeLeftMobile, KeyfactorsWrapper, Keyfactors, KeyfactorsMobile, HeadlineHome, MoreButton, MoreButtonMobile } from "../styles/styles";
import Layout from "../components/layout";
import PageLayout from "../components/pageLayout";
import text from "../data/home.json";
import { MobileView, BrowserView } from "react-device-detect";
// import "../components/effect.css";

const IndexPage = props => {
    return (
        <Layout style={{ overflowY: "hidden" }}>
            <BrowserView>
                <PageLayout>
                    <HomeLeft>
                        {/* <HeadlineHome>{text.keyfactor}</HeadlineHome> */}

                        <KeyfactorsWrapper>
                            <Keyfactors className="font">
                                {text.keyfactor1.toUpperCase()}
                            </Keyfactors>
                            <Keyfactors>{text.keyfactor2.toUpperCase()}</Keyfactors>
                            <Keyfactors>{text.keyfactor3.toUpperCase()}</Keyfactors>
                            <Keyfactors>{text.keyfactor4.toUpperCase()}</Keyfactors>
                            <Keyfactors>{text.keyfactor5.toUpperCase()}</Keyfactors>
                        </KeyfactorsWrapper>
                    </HomeLeft>
                    <HomeRight>
                        <MoreButton href="/pattern-making">More</MoreButton>
                    </HomeRight>
                </PageLayout>
            </BrowserView>

            <MobileView>
                <PageLayout>
                    <HomeLeftMobile>
                        {/* <HeadlineHome>{text.keyfactor}</HeadlineHome> */}

                        <KeyfactorsWrapper>
                            <KeyfactorsMobile className="font">
                                {text.keyfactor1.toUpperCase()}
                            </KeyfactorsMobile>
                            <KeyfactorsMobile>
                                {text.keyfactor2.toUpperCase()}
                            </KeyfactorsMobile>
                            <KeyfactorsMobile>
                                {text.keyfactor3.toUpperCase()}
                            </KeyfactorsMobile>
                            <KeyfactorsMobile>
                                {text.keyfactor4.toUpperCase()}
                            </KeyfactorsMobile>
                            <KeyfactorsMobile>
                                {text.keyfactor5.toUpperCase()}
                            </KeyfactorsMobile>
                        </KeyfactorsWrapper>
                    </HomeLeftMobile>
                    <HomeRightMobile>
                        {/* <MoreButtonMobile href="/pattern-making">More</MoreButtonMobile> */}
                    </HomeRightMobile>
                </PageLayout>
            </MobileView>
        </Layout>
    );
};

export default IndexPage;

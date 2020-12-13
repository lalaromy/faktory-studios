import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Wrapper, WrapperMobile } from '../styles/styles'


const NextPageButton = ({ children }) => {
  return (
    <>
      <BrowserView>
        <Wrapper>
          {children}
        </Wrapper>
      </BrowserView>

      <MobileView>
        <WrapperMobile>{children}</WrapperMobile>
      </MobileView>
    </>
  );
};

export default NextPageButton;

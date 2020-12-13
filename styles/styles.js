import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

export const globalStyles = (
  <Global
    styles={css`
      cursor: url("/images/cursor.png"), auto;
      font-family Helvetica Neue;
    `}
  />
)

const breakpoints = {
  sm: '500px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};



export const HomeLayout = styled.div`
  display: grid;
  width: 100%;
  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: minmax(1%, auto) 0.3fr 1fr minmax(1%, auto) ;
    margin-top: 30px;
    column-gap: 20px;
    margin-bottom: 70px;
  }
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: minmax(10%, auto) 0.5fr 2fr minmax(10%, auto);
    margin-top: 30px;
    column-gap: 20px;
    margin-bottom: 170px;
  }
`

export const PageLayout = styled.div`
  min-height: 100vh;
  display: grid;
  width: 100%;
  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: minmax(5%, auto) minmax(0, 100px) 1fr minmax(5%, auto);
    column-gap: 5px;
    margin: 100px 0;
  }
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: minmax(10%, auto) 0.5fr 3fr minmax(10%, auto);
    margin-top: 50px;
    column-gap: 40px;
    margin-bottom: 100px;
    margin-top: 100px;
  }
`

export const Box1 = styled.div`
  width: 100%;
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 2/3; 
    width: 100px;
    line-height: 1.5em; 
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 2/3;
    line-height: 1.5em;
  }
`

export const BoxContainer = styled.div`
  display: grid;
  column-gap: 10px;
  width: 100%;
  height: max-content;
  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 60% 40%;
    max-width: 1200px;
  }
`

export const Box2 = styled.div`
  width: 100%;
  margin-bottom: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #9A9A9A;
  cursor: pointer;
`
export const Box22 = styled.div`
  margin-bottom: 5px;
  padding-bottom: 10px;
  cursor: pointer;
`
export const Box3 = styled.div`
  margin-bottom: 5px;
  padding-bottom: 10px;
  color: black;
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 1/2
  }
`

export const Box4 = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 1/3x
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 1/4
  }
`

export const HeroContainer = styled.div`
  position: relative;
  width: 100%; 
  border-bottom: 10px solid black;
  margin-bottom: 50px;
  background: black;
  @media (max-width: ${breakpoints.lg}) {
    height: 90vh;
  }
  @media (min-width: ${breakpoints.lg}) {
    height: 70vh;
  }
`

export const HeroTitle = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-weight: 500;
  color: white;
  @media (max-width: ${breakpoints.lg}) {
    width: 300px;
    font-size: 24px;
  }
  @media (min-width: ${breakpoints.lg}) {
    width: 700px;
    font-size: 50px;
  }
`

export const HomeHeadline = styled.span`
 @media (max-width: ${breakpoints.lg}) {
    font-weight: 400;
    font-size: 16px;
    width: 50px;
    line-height: 1.2em;
  }
  @media (min-width: ${breakpoints.lg}) {
    font-weight: 400;
    font-size: 28px;
    line-height: 1.2em;
  }
`;

export const HomeSubheadline = styled.span`
 @media (max-width: ${breakpoints.lg}) {
    font-weight: 700;
    font-size: 16px;
    color: #9A9A9A;
  }
  @media (min-width: ${breakpoints.lg}) {
    font-weight: 700;
    font-size: 20px;
    color: #9A9A9A;
    line-height: 1.5em;
  }
`;

export const HomeText = styled.span`
 @media (max-width: ${breakpoints.lg}) {
    font-weight: 200;
    font-size: 16px;
    color: #9A9A9A;
    line-height: 1.2em;
  }
  @media (min-width: ${breakpoints.lg}) {
    font-weight: 200;
    font-size: 16px;
    color: #9A9A9A;
    line-height: 1.2em;
  }
`;

export const HomeKeyValues = styled.span`
@media (max-width: ${breakpoints.lg}) {
    font-weight: 700;
    font-size: 16px;
    color: #565656;
    line-height: 1.2em;
 }

 @media (min-width: ${breakpoints.lg}) {
    font-weight: 700;
    font-size: 20px;
    color: #565656;
    line-height: 1.5em;
 }
`;

export const HomeMore = styled(Link)`

 @media (max-width: ${breakpoints.lg}) {
    font-weight: 400;
    font-size: 16px;
    color: #9A9A9A;
    margin-top: 10px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-weight: 400;
    font-size: 16px;
    color: #9A9A9A;
    margin-top: 10px;
  }
`;

export const HomeArrow = styled(Image)`
 @media (max-width: ${breakpoints.lg}) {
    width: 10px;
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 15px;
  }
`;


export const Subheadline = styled.p`
  display: block;
  font-weight: 700;
  font-size: 20px;
  padding-top: 30px;
  padding-top: 5px;
  text-align: center;
  width: 100%;
`

export const Text = styled.span`
  font-weight: 200;
  padding-top: 30px;
  padding-top: 5px;
  line-height: 1.5em;
  text-align: justify;
`

export const Address = styled.p`
  font-family: "Yantramanav", sans-serif;
  line-height: 0.5em;
  font-weight: 300;
`;

export const Emails = styled.div`
  padding-top: 20px;
`;

export const EmailAnchor = styled.a`
 color: black;
 font-weight: 200;
`;

export const WrapperNextButton = styled.a`
  font-family: "FoundersGrotesk-Medium";
  margin: 50px 0 0 0;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: left;
`;

export const ArrowImage = styled(Image)`
  width: 50px;
  position: absolute;
  right: 70px;
  bottom: 10%;
`;

export const FooterSpace = styled.div`
`

export const FooterContainer = styled.div` 
  display: grid;
  background: #D3D3CC;
  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    padding-left: 20px;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    padding: 20px 0;
  }
`

export const Footer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: ${breakpoints.md}) {
    height: 15vh;
    align-items: flex-start;
  }
`

export const Footer2 = styled.div`

`

export const Footer3 = styled.div`
  @media (max-width: ${breakpoints.md}) {
    padding-top: 20px;
  }
`

export const Footer4 = styled.div`
  @media (max-width: ${breakpoints.md}) {
    padding: 20px 0;
  }
`

export const FooterItems = styled.p`
  color: #565656;
  text-decoration: none;
  font-size: 14px;
`;


export const FooterItemsTitle = styled.p`
  color: #565656;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
`;

export const FooterAnchor = styled.a`
color: #565656;
text-decoration: none;
font-size: 14px;
&:hover {
  text-decoration: underline;
}
@media (max-width: ${breakpoints.lg}) {
}

@media (min-width: ${breakpoints.lg}) {
}
`;

export const Headline = styled.span`
overflow-wrap: break-word;
  @media (max-width: ${breakpoints.lg}) {
    font-size: 16px;
    line-height: 1.2em;
    font-weight: 500;
    color: #565656;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 50px;
    line-height: 1.2em;
    font-weight: 500;
    color: #565656;
  }  
`;


export const Grid = styled.div`
  display: flex;
`;

export const MenuBar = styled.div`
  background: white;
  width: 100%;
  position: fixed;
  top: 0;
  background: white;
  height: 15vh;
  z-index: 1000;
`;

export const LinkStyles = styled.a`
  display: block;
  cursor: pointer;
  color: black;
  text-decoration: none;
  text-align: left;
  font-size: 20px;
  line-height: 2em;
  font-family: "FoundersGrotesk-Regular";
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const BmItem = styled.div`
  font-size: 30px;
  display: block;
  cursor: pointer;
  font-family: "FoundersGrotesk-Regular";
  z-index: 3000;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  position: relative;
  width: 100%;
  font-family: "FoundersGrotesk-Regular";
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
  &:after {
    font-family: "FoundersGrotesk-Regular";
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    font-family: "FoundersGrotesk-Regular";
    width: 100%;
    left: 0;
  }
`;

export const BmItemLink = styled.a`
  font-size: 30px;
  display: block;
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-family: "FoundersGrotesk-Regular";
  z-index: 3000;
  text-transform: uppercase;
  text-decoration: none;
  display: lock;
  position: relative;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
    width: 100%;
  }
  &:after {
    font-family: "FoundersGrotesk-Regular";
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    font-family: "FoundersGrotesk-Regular";
    width: 100%;
    left: 0;
  }
`;

export const BmOverlay = styled.div`
  font-size: 37.5px;
  line-height: 2em;
`;

export const LogoImage = styled.div`
  width: 100px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 300;
`;

export const LogoImageMobile = styled(Image)`
  width: 150px;
  position: fixed;
  top: 20px;
  left: 10px;
  z-index: 1000;
`;


export const LinesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`


export const PatternMakingRight = styled.div`
  height: 97vh;
  padding: 100px 16px 0 0;
  -webkit-overflow-scrolling: touch;
  font-family: "FoundersGrotesk-Light";
  width: 80%;
`;

export const RightColumn = styled.div`
  -webkit-overflow-scrolling: touch;
  font-family: "FoundersGrotesk-Light";

  @media (max-width: ${breakpoints.lg}) {
    padding: 0 10px;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 150px 0px 0px 10px;
    width: 80%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%; 
  height: 400px;
  border-top: 10px solid black;
  border-bottom: 10px solid black;
  margin-bottom: 50px;
`;

export const ImagePageContainer = styled.div`
  position: relative;
  width: 100%; 
  height: 400px;
  margin-bottom: 50px;
`;


export const Title = styled(Link)`
  color: black;
  text-decoration: none;
  position: absolute;
  font-weight: 600;
  left: 12px;
  top: 20px;
  cursor: pointer;
  font-family: "FoundersGrotesk-Regular";
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    grid-template-columns: 50% 49%;
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 70px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 70px;
  }
`;


export const WrapperCircle = styled.div`
    position: fixed;
    right: 20px;
    top: 100px;
    width: 50px;
    cursor: pointer;

  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    justify-content: space-evenly;
    position: relative;
    width: 100%;
  }

  @media (max-width: ${breakpoints.md}) {
    display: flex;
    justify-content: space-evenly;
    position: relative;
    width: 100%;
  }

  @media (max-width: ${breakpoints.lg}) {
    display: flex;
    justify-content: space-evenly;
    position: relative;
    width: 100%;
  }

  @media (min-width: ${breakpoints.lg}) {
    position: fixed;
    right: 20px;
    top: 100px;
    width: 50px;
    cursor: pointer;
  }
`;

export const Circle = styled.div`
  background: black;
  border-radius: 50%;
  margin: 10px 0 30px 0;
  width: 40px;
  height: 40px;
`;

export const Number = styled.span`
  position: relative;
  color: white;
  left: 30%;
  top: 25%;
  font-family: "FoundersGrotesk-Medium";
  font-size: 50px;
`;

export const WrapperCircleMobile = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 0 10px 0;
  cursor: pointer;
`;

export const CircleMobile = styled.div`
  background: black;
  border-radius: 50%;
  margin: 10px 0 10px 0;
  width: 30px;
  height: 30px;
`;

export const NumberMobile = styled.span`
  position: relative;
  color: white;
  left: 30%;
  top: 25%;
  font-family: "FoundersGrotesk-Medium";
  font-size: 20px;
`;

export const faqText = styled.span`
  grid-column: 2/6; 
`
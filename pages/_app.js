import "../styles/globals.css";
import { globalStyles } from "../styles/styles";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>FAKTORY STUDIOS</title>
      <link rel="icon" type="image/png" href="/faktory.png" sizes="32x32" />
      <link rel="shortcut icon" href="../favicon.ico" />
      <meta
        name="description"
        content={
          "FAKTORY STUDIOS | Manufacturing CMT FPP clothing apparel producer in Serbia Europe "
        }
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:title"
        content={`FAKTORY STUDIOS | Clothing Manufacturing in Serbia Europe | CMT Serbia | FPP Serbia | Clothing Apparel producer in Serbia Europe | clothing manufacturing serbia | garment manufacturing serbia | apparel production serbia | pattern making serbia | fpp serbia | cmt serbia | fashion brand production serbia | cheap production europe | `}
      />
      <meta
        property="og:description"
        content="FAKTORY STUDIOS | Clothing apparel manufacturing in Serbia Europe"
      />
      <meta property="og:image" content="../logo.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:url" content="http://faktory-studios.com/" />
    </Head>
    {globalStyles}
    <Component {...pageProps} />
  </>
);

export default App;

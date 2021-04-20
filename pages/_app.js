import "../styles/globals.css";
import { globalStyles } from "../styles/styles";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="../favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:image"
        content="https://faktory-studios.com/logo.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
    </Head>
    {globalStyles}
    <Component {...pageProps} />
  </>
);

export default App;

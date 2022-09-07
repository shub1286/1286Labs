import React, { useContext, useState } from "react";
import Head from "next/head"; 
// import favicon from "~image/favicon.png";
import GlobalContext from "../../../context/GlobalContext";
import Header from "~components/Layouts/Header";
import PageWrapperStyle from "./style";
export default function Layout({ children }) {
  const { theme } = useContext(GlobalContext);

 
  const [mobileElements,setMobileElements] = useState(false);
  
  const defaultMetaDescription = "We are an NFT project, which turned into a DAO. We emphasize on conducting weekly and special raffles till perpetuity. Our Access Pass NFT comes with several rarities and rewards + grants its holder an airdrop of our Members Pass NFT."
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Raffle DAO"/>
        <meta property="og:description" content={theme.metaDescription ? theme.metaDescription : defaultMetaDescription}/>
        {/* <meta property="og:image" content="/images/social-preview.png"/> */}
        <title>{theme.pageTitle}</title>
        {/* <link rel="icon" type="image/png" href="images/mavefil-logo-mini.png" /> */}
      </Head>
      <PageWrapperStyle
        className={`site-wrapper ${
          theme.bodyClass ? "" + theme.bodyClass : ""
        }${mobileElements ? " sidebar-open":""}`}
      >
        <Header  mobileElements={mobileElements} setMobileElements={setMobileElements}/>
          <main className="page-main">
            {children}
          </main>
        
      </PageWrapperStyle>
    </>
  );
}

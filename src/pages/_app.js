import { Layout } from "~components"
import "~scss/main.scss";
import { GlobalProvider } from "../context/GlobalContext";
import "~fonts/fontawesome-5/css/all.min.css";
import '@szhsin/react-menu/dist/core.css';
import "@/slick-carousel/slick/slick.css"; 
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "~theme/";
import  "~fonts/graphic/stylesheet.css";

function MyApp({ Component, pageProps }) {

  return(
    <ChakraProvider theme={customTheme}>
          <GlobalProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </GlobalProvider>
    </ChakraProvider>
  )
}

export default MyApp
import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import { appWithTranslation } from "next-i18next";

import { LayoutQuestion } from "../layout/layoutQuestion";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <LayoutQuestion />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
import { ChakraProvider } from '@chakra-ui/react'
import { Global, css } from '@emotion/react';
import "@/styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;














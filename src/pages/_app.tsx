import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import { jsx } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const theme = extendTheme({
    fonts: {
      heading: 'Open Sans',
      body: 'Raleway'
    }
  })
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default MyApp

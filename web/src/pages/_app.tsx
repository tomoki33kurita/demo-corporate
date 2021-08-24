import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default MyApp

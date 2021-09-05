import React from 'react'
import Head from 'next/head'
import Header from './organisms/header'
import { Box } from '@chakra-ui/react'

const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>i studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box
        backgroundImage="url('/backgroundImg.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        {children}
      </Box>
      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100px',
          borderTop: 'solid 1px #eaeaea'
        }}
      >
        <p>Copryright © i studio Inc. All Rights Reserved.</p>
      </footer>
    </Box>
  )
}

export default Layout

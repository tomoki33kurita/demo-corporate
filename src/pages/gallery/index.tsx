import React from 'react'
import { Box } from '@chakra-ui/react'
import SubHeader from '../../components/organisms/subHeader'

const Gallery: React.VFC = () => {
  return (
    <Box minHeight={'100vh'} pb={5}>
      <SubHeader title={'ギャラリーページ'} />
    </Box>
  )
}

export default Gallery

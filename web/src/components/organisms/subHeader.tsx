import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

type Props = {
  pageTitle: string
}

const SubHeader: React.VFC<Props> = ({ pageTitle }) => {
  return (
    <Box background={'yellow.200'} p={4}>
      <Heading as={'h2'} size={'md'} p={2}>
        {pageTitle}
      </Heading>
    </Box>
  )
}

export default SubHeader

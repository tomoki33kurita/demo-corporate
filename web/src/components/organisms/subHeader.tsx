import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

type Props = {
  title: string
}

const SubHeader: React.VFC<Props> = ({ title }) => {
  return (
    <Box p={4}>
      <Heading as={'h2'} size={'md'} p={2}>
        {title}
      </Heading>
    </Box>
  )
}

export default SubHeader

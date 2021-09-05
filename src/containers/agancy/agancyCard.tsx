import React from 'react'
import { Box, Heading, Text, Link as A } from '@chakra-ui/react'
import Link from 'next/link'

type Props = {
  agancy: {
    shopName: string
    address: string
    phone: string
    content: string
    link?: string
  }
}

const AgancyCard: React.VFC<Props> = ({ agancy }) => {
  const { shopName, address, phone, content, link } = agancy
  return (
    <Box
      border={'2px'}
      borderRadius={'lg'}
      borderColor={'gray.100'}
      padding={3}
      mx={3}
      marginBottom={3}
      backgroundColor={'gray.100'}
    >
      <Heading size="md" marginBottom={3} fontWeight={'bold'}>
        {shopName}
      </Heading>
      <Text ml={3}>住所：{address}</Text>
      <Text ml={3}>TEL：{phone}</Text>
      <Text ml={3}>取扱内容：{content}</Text>
      {link && (
        <Text ml={3}>
          <Link href={link}>
            <A color={'blue.500'}>{link}</A>
          </Link>
        </Text>
      )}
    </Box>
  )
}

export default AgancyCard

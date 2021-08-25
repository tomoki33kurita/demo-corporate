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
      borderColor={'gray.300'}
      padding={3}
      mx={3}
      marginBottom={3}
    >
      <Heading size="md" marginBottom={3} fontWeight={'bold'}>
        {shopName}
      </Heading>
      <Text>住所：{address}</Text>
      <Text>TEL：{phone}</Text>
      <Text>取扱内容：{content}</Text>
      {link && (
        <Link href={link}>
          <A color={'yellow.500'}>{link}</A>
        </Link>
      )}
    </Box>
  )
}

export default AgancyCard

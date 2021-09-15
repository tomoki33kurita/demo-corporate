import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'

type Props = {
  orderGlove: {
    productNum: string
    imageUrl1: {
      url: string
      height: number
      width: number
    }
    imageUrl2?: {
      url: string
      height: number
      width: number
    }
    imageUrl3?: {
      url: string
      height: number
      width: number
    }
    size: number
    type?: string
    name?: string
    prefectures?: string
  }
}

export const GalleryCard: React.VFC<Props> = ({ orderGlove }) => {
  const { productNum, imageUrl1, size, type } = orderGlove
  return (
    <Box m={5} pb={5} border={'1px'} borderColor={'gray.100'} borderRadius={'md'} backgroundColor={'gray.100'}>
      <Box px={10} py={5}></Box>
      <Image src={imageUrl1.url} alt={productNum} />
      <Box pt={1} px={5}>
        <Text mr={2}>長さ：約{size}cm</Text>
        <Text mr={2}>型番号：{productNum}</Text>
        <Text>種類：{type}</Text>
      </Box>
    </Box>
  )
}

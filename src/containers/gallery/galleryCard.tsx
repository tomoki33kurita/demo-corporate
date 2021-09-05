import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'

type Props = {
  orderGlove: {
    productNum: string
    imageUrl1: string
    imageUrl2?: string
    imageUrl3?: string
    size: number
    type?: string
    name?: string
    prefectures?: string
  }
}

const ProductCard: React.VFC<Props> = ({ orderGlove }) => {
  const { productNum, imageUrl1, imageUrl2, imageUrl3, size, type, name, prefectures } = orderGlove
  return (
    <Box m={5} pb={5} border={'1px'} borderColor={'gray.100'} borderRadius={'md'} backgroundColor={'gray.100'}>
      <Box px={10} py={5}>
        <Text textAlign={'center'} px={10} background={'blue.300'} borderRadius={'full'}>
          型番号：{productNum}（{type}）
        </Text>
      </Box>
      <Image src={imageUrl1} alt={productNum} />
      <Box pt={1} px={5}>
        <Text mr={2}>長さ：約{size}cm</Text>
        <Text mr={2}>
          お名前：{prefectures},{name}
        </Text>
      </Box>
    </Box>
  )
}

export default ProductCard

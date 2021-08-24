import React from 'react'
import { Box, Text, Flex, Image } from '@chakra-ui/react'

type Props = {
  product: {
    model: string
    imageUrl: string
    discription: string
  }
}

const ProductCard: React.VFC<Props> = ({ product }) => {
  const { model, imageUrl, discription } = product
  return (
    <Box border={'1px'} marginBottom={10}>
      <Text paddingY={5} paddingX={10}>
        型番号：{model}
      </Text>
      <Image src={imageUrl} alt={model} />
      <Text paddingY={5} paddingX={10}>
        {discription}
      </Text>
      <Flex marginBottom={5} marginLeft={10}>
        <Text>長さ約27cm</Text>
        <Flex marginLeft={5}>
          <Text>Color：</Text>
          <Text>ブラック,</Text>
          <Text>オレンジ</Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProductCard

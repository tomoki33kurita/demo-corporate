import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'

type Props = {
  product: {
    model: string
    imageUrl: string
    discription: string
    length: number
    colors: {
      label: string
      colorCode: string
    }[]
  }
}

const ProductCard: React.VFC<Props> = ({ product }) => {
  const { model, imageUrl, discription, length, colors } = product
  return (
    <Box
      my={3}
      mx={[0, 3, 4, 5]}
      pb={5}
      border={'1px'}
      borderColor={'gray.100'}
      borderRadius={'md'}
      backgroundColor={'gray.100'}
    >
      <Box px={10} py={5}>
        <Text textAlign={'center'} px={10} background={'blue.300'} borderRadius={'full'}>
          型番号：{model}
        </Text>
      </Box>
      <Image src={imageUrl} alt={model} />
      <Text fontSize={14} py={3} px={5}>
        {discription}
      </Text>
      <Box pt={1} px={5}>
        <Text mr={2}>長さ：約{length}cm</Text>
        <Text>Color：{colors.map((color) => `${color.label} `)}</Text>
      </Box>
    </Box>
  )
}

export default ProductCard

import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

type Props = {
  product: {
    model: string;
    imageUrl: string;
    discription: string;
  };
};

const ProductCard: React.VFC<Props> = ({ product }) => {
  const { model, imageUrl, discription } = product;
  return (
    <Box
      m={3}
      pb={5}
      border={"1px"}
      borderColor={"gray.300"}
      borderRadius={"md"}
    >
      <Box px={10} py={5}>
        <Text
          textAlign={"center"}
          px={10}
          background={"yellow.300"}
          borderRadius={"full"}
        >
          型番号：{model}
        </Text>
      </Box>
      <Image src={imageUrl} alt={model} />
      <Text fontSize={14} py={3} px={5}>
        {discription}
      </Text>
      <Box pt={1} px={5}>
        <Text mr={2}>長さ：約27cm</Text>
        <Text>Color：ブラック, オレンジ</Text>
      </Box>
    </Box>
  );
};

export default ProductCard;

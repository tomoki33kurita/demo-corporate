import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Box, Flex, Text, Heading, Link as A } from '@chakra-ui/react'
import { CaroucelSlider } from '../components/caroucelSlider'
import { BannerButton } from '../components/atoms/bannerButton'

const Home: React.VFC = () => {
  return (
    <Box>
      <Box px={10} py={7} bgColor={'gray.100'}>
        <CaroucelSlider />
      </Box>
      <Box p={28} bgColor={'green.100'}>
        <Flex justify={'center'}>
          <Heading as={'h3'} fontSize={'x-large'}>
            お知らせ
          </Heading>
        </Flex>
        <Flex
          mx={'auto'}
          p={5}
          maxWidth={'800px'}
          border={'solid 2px'}
          borderColor={'gray.200'}
          borderRadius={'10px'}
        >
          <Text>aaa</Text>
          <Text>aaa</Text>
          <Text>aaa</Text>
          <Text>aaa</Text>
          <Text>aaa</Text>
        </Flex>
      </Box>
      <Flex
        alignItems={'center'}
        justify={'center'}
        wrap={'wrap'}
        // maxWidth={'800px'}
        width={'100%'}
        mx={'auto'}
        py={1}
        mb={0}
      >
        <BannerButton href={'/products'} heading={'製品ラインナップ'} />
        <BannerButton href={'/agancy'} heading={'お取扱店一覧'} />
        <BannerButton href={'/about'} heading={'会社概要'} />
        <BannerButton href={'/contact'} heading={'お問い合わせ'} />
      </Flex>
      <Box bgColor={'orange.100'} p={10} height={'xs'}>
        SNS表示領域
      </Box>
    </Box>
  )
}

export default Home

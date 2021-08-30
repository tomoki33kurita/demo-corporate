import { Box, Flex, Text, Heading, Link as A, Grid, GridItem } from '@chakra-ui/react'
import { CaroucelSlider } from '../components/caroucelSlider'
import { BannerButton } from '../components/atoms/bannerButton'

const Home: React.VFC = () => {
  return (
    <Box>
      <Box p={10} borderBottom={'solid 1px'} borderColor={'gray.100'}>
        <CaroucelSlider />
      </Box>
      <Box p={10}>
        <Flex justify={'center'} pb={5}>
          <Heading as={'h3'} fontSize={'x-large'}>
            お知らせ
          </Heading>
        </Flex>
        <Box
          mx={'auto'}
          p={5}
          // maxWidth={'800px'}
          border={'solid 2px'}
          borderColor={'gray.200'}
          borderRadius={'10px'}
        >
          <Text>2021/08/29　　2022年カタログ販売開始のお知らせ........</Text>
          <Text>2021/08/01　　お盆休業のお知らせ........</Text>
          <Text>2021/05/01　　ゴールデンウィーク休業のお知らせ........</Text>
          <Text>2021/03/12　　限定オーダー開始のお知らせ</Text>
          <Text>2021/01/29　　アドバイザリースタッフ契約の発表........</Text>
        </Box>
      </Box>

      <Flex
        alignItems={'center'}
        justify={'center'}
        wrap={'wrap'}
        // maxWidth={'800px'}
        width={'100%'}
        mx={'auto'}
        my={7}
        p={10}
        borderBottom={'solid 1px'}
        borderColor={'gray.100'}
      >
        <BannerButton href={'/products'} heading={'製品ラインナップ'} />
        <BannerButton href={'/agancy'} heading={'お取扱店一覧'} />
        <BannerButton href={'/about'} heading={'会社概要'} />
        <BannerButton href={'/contact'} heading={'お問い合わせ'} />
      </Flex>
    </Box>
  )
}

export default Home

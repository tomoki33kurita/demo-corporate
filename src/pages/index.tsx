import React from 'react'
import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import { CaroucelSlider } from '../components/caroucelSlider'
import { BannerButton } from '../components/atoms/bannerButton'
import { fetchAllNews } from './api/news'
import dayjs from 'dayjs'
import { HoverLink } from '../components/atoms/hoverLink'

export const getStaticProps = async () => {
  const allNews = await fetchAllNews()
  return {
    props: {
      allNews
    }
  }
}

type Props = {
  allNews: any[]
}

const Home: React.VFC<Props> = ({ allNews }) => {
  return (
    <Box minHeight={'100vh'} pt={10}>
      <Box borderBottom={'solid 1px'} borderColor={'gray.100'}>
        <CaroucelSlider />
      </Box>
      <Box p={[5, 5, 10]} my={10} backgroundColor={'gray.100'}>
        <Heading as={'h3'} fontSize={'xx-large'} pb={5} textAlign={'center'}>
          What is Yell Story
        </Heading>
        <Box p={[3, 3, 5]}>
          <Text fontSize={14} textAlign={'center'} lineHeight={2}>
            エールストーリーは日々進化、変化していくプレイスタイルを
            <br />
            常にプレイヤー目線で研究してきたグラブを製作しています。
            <br />
            私たちグラブ職人が、野球で培ってきた経験を基に、あらゆる工程の場面で、
            <br />
            幾度となく手を通し、"捕る""掴む""当てる"感覚を吹き込みながら、
            <br />
            真剣にグラブと向き合っています。
          </Text>
          <Text fontSize={14} mt={5} textAlign={'center'} lineHeight={2}>
            あなたのベースボールストーリーが充実したものになるように、
            <br />
            私たちは全力でエールを送り続けます
          </Text>
        </Box>
      </Box>

      <Box p={[5, 5, 10]} my={10} backgroundColor={'gray.100'}>
        <Heading as={'h3'} fontSize={'xx-large'} pb={5} textAlign={'center'}>
          News
        </Heading>
        <Box
          mx={'auto'}
          p={5}
          // maxWidth={'800px'}
          border={'solid 2px'}
          borderColor={'gray.300'}
          borderRadius={'10px'}
        >
          {allNews.map((news: any) => {
            return (
              <Box key={news.id}>
                <HoverLink href={`/news/${news.id}`}>
                  <Box as={'span'} mr={3}>
                    {dayjs(news.createdAt).format('YYYY/MM/DD')}
                  </Box>
                  <Box as={'span'} fontSize={14}>
                    {news.title}
                  </Box>
                </HoverLink>
              </Box>
            )
          })}
        </Box>
      </Box>

      <Flex
        alignItems={'center'}
        justify={'center'}
        wrap={'wrap'}
        // maxWidth={'800px'}
        width={'100%'}
        mx={'auto'}
        p={[7, 10]}
      >
        <BannerButton href={'/products'} heading={'製品'} />
        <BannerButton href={'/agancy'} heading={'お取扱店'} />
        <BannerButton href={'/about'} heading={'会社概要'} />
        <BannerButton href={'/contact'} heading={'お問い合わせ'} />
      </Flex>
    </Box>
  )
}

export default Home

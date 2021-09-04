import React from 'react'
import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import { CaroucelSlider } from '../components/caroucelSlider'
import { BannerButton } from '../components/atoms/bannerButton'
import { fetchAllNews } from './api/news'
import dayjs from 'dayjs'

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
    <Box>
      <Box borderBottom={'solid 1px'} borderColor={'gray.100'}>
        <CaroucelSlider />
      </Box>
      <Box p={[5, 5, 10]}>
        <Heading as={'h3'} fontSize={'xx-large'} pb={5} textAlign={'center'}>
          What is Yell Story
        </Heading>
        <Box p={[3, 3, 5]}>
          <Text fontSize={14}>
            エールストーリーは、2017年に創業しました。エールストーリーは、2017年に創業しました。エールストーリーは、2017年に創業しました。エールストーリーは、2017年に創業しました。エールストーリーは、2017年に創業しました。エールストーリーは、2017年に創業しました。エールストーリーは、2017年に創業しました。エールストーリーは、2017年に創業しました。エールストーリーは、2017年に創業しました。エールストーリーは、2017年に創業しました。エールストーリーは、2017年に創業しました。
          </Text>
        </Box>
      </Box>

      <Box p={[5, 5, 10]}>
        <Heading as={'h3'} fontSize={'xx-large'} pb={5} textAlign={'center'}>
          News
        </Heading>
        <Box
          mx={'auto'}
          p={5}
          // maxWidth={'800px'}
          border={'solid 2px'}
          borderColor={'gray.200'}
          borderRadius={'10px'}
        >
          {allNews.map((news: any) => {
            console.log(news.id)
            return (
              <Flex key={news.id}>
                <Box mr={3}>{dayjs(news.createdAt).format('YYYY/MM/DD')}</Box>
                <Text fontSize={14}>{news.title}</Text>
                {/* <Box
                  dangerouslySetInnerHTML={{
                    __html: news.content
                  }}
                ></Box> */}
              </Flex>
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
        mb={7}
        p={[0, 10]}
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

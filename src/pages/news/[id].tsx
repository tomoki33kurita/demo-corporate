import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { fetchNewsById, fetchAllNews } from '../api/news'

export const getStaticPaths = async () => {
  const allNews = await fetchAllNews()
  const paths = allNews?.map((news: any) => `/news/${news.id}`)
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const id = params.id
  const news = await fetchNewsById(id)
  return {
    props: {
      news
    }
  }
}

const NewsPost = ({ news }: { news: any }) => {
  console.log('news2の中身', news)
  return (
    <>
      <Heading as={'h2'} p={7} color={'gray.100'}>
        {news.title}
      </Heading>
      <Box
        backgroundColor={'gray.100'}
        p={[0, 10]}
        dangerouslySetInnerHTML={{
          __html: news.content
        }}
      ></Box>
    </>
  )
}

export default NewsPost

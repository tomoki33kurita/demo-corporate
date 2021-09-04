import { Box } from '@chakra-ui/core'
import React from 'react'
import { fetchNewsById } from '../api/news'
import { useRouter } from 'next/dist/client/router'
// import { jsx } from '@emotion/react'

const NewsPost = () => {
  const router = useRouter()
  const news = { content: '' }
  // const { id: contentId } = router.query
  // const news2 = fetchNewsById(contentId)
  // console.log('news2の中身', news2)
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: news.content
      }}
    ></Box>
  )
}

export default NewsPost

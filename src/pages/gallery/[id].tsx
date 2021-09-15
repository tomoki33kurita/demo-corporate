import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { CaroucelSlider } from '../../components/caroucelSlider'
import { fetchAllGalleries, fetchGalleryById } from '../api/gallery'

export const getStaticPaths = async () => {
  const allGalleries = await fetchAllGalleries()
  const paths = allGalleries?.map((gallery: any) => `/gallery/${gallery.id}`)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const id = params.id
  const gallery = await fetchGalleryById(id)
  return {
    props: {
      gallery
    }
  }
}

const GalleryPost = ({ gallery }: { gallery: any }) => {
  return (
    <Box minHeight={'100vh'} p={[5, 10, 30]} mx={'auto'}>
      <Box px={[0, 20, 20, 60]}>
        <Box pt={[0, 5]} px={[0, 5]} color={'gray.100'} fontWeight={'bold'}>
          <Text mr={2}>型番号：{gallery.productNum}</Text>
          <Text mr={2}>長さ：約{gallery.size}cm</Text>
          <Text>種類：{gallery.type}</Text>
        </Box>
        <CaroucelSlider urls={[gallery.imageUrl1.url, gallery.imageUrl2.url, gallery.imageUrl3.url]} />
      </Box>
    </Box>
  )
}

export default GalleryPost

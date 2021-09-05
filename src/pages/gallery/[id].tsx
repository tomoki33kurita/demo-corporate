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
      <Box pt={5} px={5} color={'gray.100'} fontWeight={'bold'}>
        <Text textAlign={'center'} px={10} mt={3} mb={7} background={'blue.300'} borderRadius={'full'}>
          型番号：{gallery.productNum}
        </Text>
        <Text mr={2}>長さ：約{gallery.size}cm</Text>
        <Text mr={2}>
          お名前：{gallery.prefectures},{gallery.name}
        </Text>
        <Text>種類：{gallery.type}</Text>
      </Box>
      <Box p={[5, 10, 30]}>
        <CaroucelSlider urls={[gallery.imageUrl1.url, gallery.imageUrl2.url, gallery.imageUrl3.url]} />
      </Box>
    </Box>
  )
}

export default GalleryPost

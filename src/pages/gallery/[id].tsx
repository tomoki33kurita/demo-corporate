import { Box, Image } from '@chakra-ui/react'
import React from 'react'
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
    <Box minHeight={'100vh'} p={20}>
      <Image src={gallery.imageUrl1.url} />
    </Box>
  )
}

export default GalleryPost

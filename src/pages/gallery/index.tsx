import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import SubHeader from '../../components/organisms/subHeader'
import { fetchAllGalleries } from '../api/gallery'
import { GalleryCard } from '../../containers/gallery/galleryCard'
import { HoverLink } from '../../components/atoms/hoverLink'

export const getStaticProps = async () => {
  const allGalleries = await fetchAllGalleries()
  return {
    props: {
      allGalleries
    }
  }
}

type Props = {
  allGalleries: any
}

const Gallery: React.VFC<Props> = ({ allGalleries }) => {
  return (
    <Box minHeight={'100vh'} pb={5}>
      <SubHeader title={'ギャラリーページ'} />
      <Grid
        px={[0, 0, 10]}
        py={[10, 10, 5]}
        templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']}
      >
        {allGalleries.map((gallery: any) => (
          <HoverLink href={`/gallery/${gallery.id}`} key={gallery.id}>
            <GridItem>
              <GalleryCard orderGlove={gallery} />
            </GridItem>
          </HoverLink>
        ))}
      </Grid>
    </Box>
  )
}

export default Gallery

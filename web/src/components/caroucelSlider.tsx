import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
export const CaroucelSlider: React.VFC = () => {
  return (
    <Slider {...settings}>
      <Box p={'5'}>
        <Image src={'/sampleTop.jpeg'} alt={'topImg1'} width={'100%'} />
      </Box>
      <Box p={'5'}>
        <Image src={'/sampleTop.jpeg'} alt={'topImg1'} width={'100%'} />
      </Box>
    </Slider>
  )
}

import React from 'react'
import { Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, EffectFade, Pagination, Navigation } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay, EffectFade, Pagination, Navigation])

export const CaroucelSlider: React.VFC = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoplay={{ delay: 7000 }}
      loop
      effect={'fade'}
      navigation
    >
      <SwiperSlide>
        <Image src={'/sampleTop.jpeg'} alt={'topImg1'} width={'100%'} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={'/sampleTop2.jpeg'} alt={'topImg2'} width={'100%'} />
      </SwiperSlide>
    </Swiper>
  )
}

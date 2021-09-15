import React from 'react'
import { Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, EffectFade, Pagination, Navigation } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay, EffectFade, Pagination, Navigation])

export const CaroucelSlider: React.VFC<{ urls: string[] }> = ({ urls }) => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoplay={{ delay: 7000 }}
      loop
      // effect={'fade'}
      navigation
    >
      {urls.map((url) => (
        <SwiperSlide key={url}>
          <Image src={url} alt={'topImg1'} width={'100%'} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

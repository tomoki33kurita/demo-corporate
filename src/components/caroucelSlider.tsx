import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay, EffectFade]);

export const CaroucelSlider: React.VFC = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoplay={{ delay: 7000 }}
      loop
      effect={"fade"}
    >
      <SwiperSlide>
        <Image src={"/sampleTop.jpeg"} alt={"topImg1"} width={"100%"} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/sampleTop2.jpeg"} alt={"topImg2"} width={"100%"} />
      </SwiperSlide>
    </Swiper>
  );
};

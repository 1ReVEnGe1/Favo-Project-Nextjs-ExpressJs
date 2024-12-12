'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import styles from './LocationsHome.css'
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

const LocationsHome = ()=> {
    return(
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
            delay:1000,
            disableOnInteraction:true
        }}
        className={`${styles.myswiper} `}
      >
        <SwiperSlide >
          <Image 
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt='test'
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt='test'
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt='test'
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt='test'
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt='test'
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt='test'
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt='test'
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt='test'
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt='test'
            width={300}
            height={300}
          />
        </SwiperSlide>
      </Swiper>
    )
}


export default LocationsHome
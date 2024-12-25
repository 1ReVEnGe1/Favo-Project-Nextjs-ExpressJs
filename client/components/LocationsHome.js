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
import { LOCATIONS } from '@/database/db';

const LocationsHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenPic = (img) => {
    setIsModalOpen(true);
    setSelectedImage(img)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <>

      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 20,
          modifier: 2,
          slideShadows:false

        }}

        modules={[EffectCoverflow, Pagination, Autoplay,]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true
        }}
        pagination={{
          clickable: true, // Dots will be clickable
          dynamicBullets: true, // Enables dynamic pagination bullets
        }}
        loop={true}
        className={`${styles.myswiper} `}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >

        {
          LOCATIONS.map(loc => (
            <SwiperSlide key={loc.id} onClick={() => handleOpenPic(loc.mainPic)} >
              <div className='loc-card'>
                <Image
                  src={loc.mainPic}
                  alt={loc.name}
                  width={300}
                  height={300}
                  quality={50}
                />
                <h3 className='text-white'> {loc.type} {loc.name} </h3>
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>

      {
        isModalOpen && (
          <div onClick={handleCloseModal} className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-70 flex justify-center items-center" style={{ zIndex: '1000' }}>
            <div className="relative p-2 modal-content " onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Favo Gallery"
                fill
                style={{ objectFit: 'contain' }}
                quality={100}
              />
            </div>
            <button onClick={handleCloseModal} className="text-red-500 absolute top-10 right-10 text-3xl sm:top-8 sm:right-8 sm:text-4xl font-bold xl:top-20 xl:right-20 xl:text-7xl  hover:text-red-900">
              &#215;
            </button>
          </div>
        )
      }
    </>
  )
}


export default LocationsHome
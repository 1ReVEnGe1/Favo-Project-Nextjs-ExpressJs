"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from 'swiper/modules'
import Image from "next/image"
import Link from "next/link"
import 'swiper/css'
import 'swiper/css/navigation'


import styles from './Slider.module.css'
import './Slider.css'


const Slider = () => {
    return (
        <>
            <div className='bg-black pb-8 px-8 pt-20'>
                <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className={styles.swiper}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide className={styles['swiper-slide']} >
                        <Image
                            src={'/images/برگزاری عروسی.webp'}
                            fill
                            quality={100}
                            loading="lazy"
                            style={{ 'objectFit': 'cover' }}
                            alt="تشریفات عروسی فاوو ایونت"
                            sizes="(max-width:1000px) 100%,(max-width:1000px) 100% "
                        />
                        <div className="slider-image-card">
                            <h4>Favo Event</h4>
                            <div className="hyperText">
                                <Link href="#">You Deserve To Shine</Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles['swiper-slide']} >
                        <Image
                            src={'/images/تشریفات عروسی فاوو ایونت.webp'}
                            fill
                            quality={100}
                            loading="lazy"
                            style={{ 'objectFit': 'cover' }}
                            alt="تشریفات عروسی"
                            sizes="(max-width:1000px) 100%,(max-width:1000px) 100% "
                        />
                        <div className="slider-image-card">
                            <h4>Favo Event</h4>
                            <div className="hyperText">
                                <Link href="#">Your Fantasy Your Story</Link>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className={styles['swiper-slide']} >
                        <Image
                            src={'/images/تشریفات عروسی.webp'}
                            fill
                            quality={100}
                            loading="lazy"
                            style={{ 'objectFit': 'cover' }}
                            alt="بهترین تشریفات عروسی تهران"
                            sizes="(max-width:1000px) 100%,(max-width:1000px) 100% "
                        />
                        <div className="slider-image-card">
                            <h4>Favo Event</h4>
                            <div className="hyperText">
                                <Link href="#">Dreams Have No Boundaries</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* No Script Tag For SEO */}
            <noscript>
                <div>
                    <img
                        src="/images/برگزاری عروسی.webp"
                        alt="تشریفات عروسی فاوو ایونت"
                        style={{width:'100%', height:'auto'}}
                    />
                    <div >
                        <h4>Favo Event</h4>
                        <div >
                            <Link href="#">You Deserve To Shine</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="/images/تشریفات عروسی فاوو ایونت.webp"
                        alt="تشریفات عروسی"
                        style={{width:'100%', height:'auto'}}
                    />
                    <div >
                        <h4>Favo Event</h4>
                        <div >
                            <Link href="#">Your Fantasy Your Story</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="/images/تشریفات عروسی.webp"
                        alt="بهترین تشریفات عروسی تهران"
                        style={{width:'100%', height:'auto'}}
                    />
                    <div >
                        <h4>Favo Event</h4>
                        <div >
                            <Link href="#">Dreams Have No Boundaries</Link>
                        </div>
                    </div>
                </div>

            </noscript>

        </>
    )
}

export default Slider
'use client'

import Image from "next/image";
import GalleryItems from "./GalleryItems"
import { useState } from "react"

import './PhotoGallerySection.css'

const PhotoGallerySection = ({ rightPics: firstEightFingers, midPics: secondEighFingers, leftPics: thirdEightFingers, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpenPic = (img) => {
        setIsModalOpen(true);
        setSelectedImage(img);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    }


    return (
        <section className="photo-gallery-container">

            <div className="photo-gallery-title">
                <h2 >{title}</h2>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 sm:px-3 lg:gap-5 lg:px-5 lg:px photo-gallery px-2 " >
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-5 w-full relative" >
                    {
                        firstEightFingers.map(elem => (
                            <GalleryItems
                                img={elem.image}
                                key={elem.id}
                                id={elem.id}
                                handleOpenPic={handleOpenPic}
                            />
                        ))
                    }
                </div>
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-5 w-full relative" >
                    {
                        secondEighFingers.map((elem) => (
                            <GalleryItems
                                img={elem.image}
                                key={elem.id}
                                id={elem.id}
                                handleOpenPic={handleOpenPic}
                            />
                        ))
                    }
                </div>
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-5 w-full relative"  >
                    {
                        thirdEightFingers.map((elem) => (
                            <GalleryItems
                                img={elem.image}
                                key={elem.id}
                                id={elem.id}
                                handleOpenPic={handleOpenPic}
                            />
                        ))
                    }
                </div>
            </div>

            {
                isModalOpen && (
                    <div onClick={handleCloseModal} className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-70 flex justify-center items-center" style={{ zIndex: '1000' }}>
                        <div className="relative p-2 modal-content " onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={selectedImage}
                                alt="Favo Gallery"
                                fill
                                style={{ objectFit: 'contain' }}

                            />
                        </div>
                        <button onClick={handleCloseModal} className="text-red-500 absolute top-10 right-10 text-3xl sm:top-8 sm:right-8 sm:text-4xl font-bold xl:top-20 xl:right-20 xl:text-7xl  hover:text-red-900">
                            X
                        </button>
                    </div>
                )
            }


        </section>
    )
}

export default PhotoGallerySection
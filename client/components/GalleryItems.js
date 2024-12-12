'use client'

import Image from "next/image"

const GalleryItems = ({img, id ,  handleOpenPic}) => {


    return (
        <div className=" relative w-96 "  >
            <Image
                width={384}
                height={250}
                src={img}
                alt={img.split('/')[3].split('.')[0]}
                quality={90}
                style={{ objectFit: 'cover', borderRadius: '5px' }}
                loading="lazy"
            />
        
        </div>
    )
}

export default GalleryItems
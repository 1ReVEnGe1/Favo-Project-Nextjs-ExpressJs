'use client'

import Image from "next/image"

const GalleryItems = ({img, id ,  handleOpenPic}) => {


    return (
        <div className="h-auto w-full rounded-lg gallery-img-cont cursor-pointer overflow-hidden" onClick={()=> handleOpenPic(img)} >
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
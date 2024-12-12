import GalleryItems from "./GalleryItems"

const PhotoGallerySection = ({rightPics:firstEightFingers , midPics:secondEighFingers , leftPics:thirdEightFingers , title})=> {
    return (
        <section className="photo-gallery-container">

                <div className="photo-gallery-title">
                    <h2 className=" text-white text-center text-xl font-bold">{title}</h2>
                </div>

                <div className="flex gap-5  photo-gallery" >
                    <div className="flex flex-col gap-5 w-96 relative" >
                        {
                            firstEightFingers.map(elem => (
                                <GalleryItems
                                    img={elem.image}
                                    key={elem.id}
                                    id={elem.id}

                                />
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-5 w-96 " >
                        {
                            secondEighFingers.map((elem) => (
                                <GalleryItems
                                    img={elem.image}
                                    key={elem.id}
                                    id={elem.id}
                                />
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-5 w-96 "  >
                        {
                            thirdEightFingers.map((elem) => (
                                <GalleryItems
                                    img={elem.image}
                                    key={elem.id}
                                    id={elem.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
    )
}

export default PhotoGallerySection
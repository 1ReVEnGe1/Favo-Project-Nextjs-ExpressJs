
import { GALLERY } from "@/database/db"
import './gallery-page.css'
import PhotoGallerySection from "@/components/PhotoGallerySection";
import PageTop from "@/components/PageTop";


const Gallery = () => {


    const firstEightFingers = GALLERY[0]['images'].slice(0, 9);
    const secondEighFingers = GALLERY[0]['images'].slice(9, 18);
    const thirdEightFingers = GALLERY[0]['images'].slice(18, 28);

    const firstEightDecor = GALLERY[1]['images'].slice(0, 6);
    const secondEightDecor = GALLERY[1]['images'].slice(6, 13);
    const thirdEightDecor = GALLERY[1]['images'].slice(13, 20);

    const firstEightFlower = GALLERY[2]['images'].slice(0, 5);
    const secondEightFlower = GALLERY[2]['images'].slice(5, 9);
    const thirdEightFlower = GALLERY[2]['images'].slice(9, 13);

    const firstEightFireshow = GALLERY[3]['images'].slice(0, 3);
    const secondEightFireshow = GALLERY[3]['images'].slice(3, 6);
    const thirdEightFireshow = GALLERY[3]['images'].slice(6, 10);

    const firstEightBar = GALLERY[4]['images'].slice(0, 5);
    const secondEightBar = GALLERY[4]['images'].slice(5, 10);
    const thirdEightBar = GALLERY[4]['images'].slice(10, 14);



    return (
        <div style={{paddingTop:'100px'}}>
            
            <PageTop 
                img={'/images/fingerfoods/فینگرفود تشریفاتی فاوو ایونت.webp'} 
                title={'گالری فاوو ایونت'} 
                link={'/gallery'}
            />
            
            <PhotoGallerySection
                title={'فینگرفود ها'}
                leftPics={firstEightFingers}
                midPics={secondEighFingers}
                rightPics={thirdEightFingers}
            />
            {/* ------------------------------ */}
            <PhotoGallerySection
                title={'دکوراسیون'}
                leftPics={firstEightDecor}
                midPics={secondEightDecor}
                rightPics={thirdEightDecor}
            />
            {/* ------------------------------ */}
            <PhotoGallerySection
                title={'گل آرایی'}
                leftPics={firstEightFlower}
                midPics={secondEightFlower}
                rightPics={thirdEightFlower}
            />
            {/* ------------------------------ */}
            <PhotoGallerySection
                title={'فایرشو'}
                leftPics={firstEightFireshow}
                midPics={secondEightFireshow}
                rightPics={thirdEightFireshow}
            />
            {/* ------------------------------ */}
            <PhotoGallerySection
                title={'بارتندر'}
                leftPics={firstEightBar}
                midPics={secondEightBar}
                rightPics={thirdEightBar}
            />
            {/* ------------------------------ */}
        </div>
    )
}

export default Gallery
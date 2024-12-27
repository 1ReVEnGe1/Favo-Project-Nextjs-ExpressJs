import PageTop from "@/components/PageTop"
import { SERVICES_PAGE_CARDS, SERVICES_PAGE_TEST_PICS } from "@/database/db"

import Link from "next/link"
import Image from "next/image"
import styles from './services.module.css'
import TitleH2 from "@/components/TitleH2"


const Services = () => {



    return (
        <div style={{ paddingTop: '100px' }}>
            <PageTop
                img='images/ByronBayWeddingFair2022-51.jpg'
                title={'خدمات تشریفات عروسی فاوو ایونت'}
            />
            <main className="max-w-[1200px] mx-auto">
                <section className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 justify-center mt-12 mb-12">
                    {
                        SERVICES_PAGE_CARDS.map((card, index) => (
                            <Link key={index} href={card.href} className={styles.card} style={{ "--i": index + 4 }}>
                                <Image src={card.imgSrc} alt={card.title} width={50} height={50} />
                                <div>
                                    <h4 >{card.title}</h4>
                                </div>
                            </Link>
                        ))
                    }
                </section>
                <section className={styles.content}>
                    
                    <TitleH2 text='مراسم عروسی' boldText='دیزاین' />
                    <hr />
                    <p>زیباترین دکورها و چیدمان با استفاده از آیتم های دست ساز و خاص مجنوعه فاوو و ترکیب با المان های طبیعی و مصنوعی برای تزیین محیط مراسم عروسی</p>
                    <section className={styles['wedding_gallery']}>
                        {
                            SERVICES_PAGE_TEST_PICS.map((pic, index) => (
                                <div
                                    key={index}
                                    className={`${styles['wedding_gallery_item']} ${index === 0 ? `${styles['main_pik']}` : ''}`}
                                >
                                    <Image
                                        src={pic}
                                        loading="lazy"
                                        width={300}
                                        height={500}
                                        alt='test'
                                    />
                                </div>
                            ))


                        }
                    </section>
                </section>

            </main>
        </div>
    )
}

export default Services
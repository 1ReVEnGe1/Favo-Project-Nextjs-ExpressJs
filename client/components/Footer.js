import Image from "next/image"

import './Footer.css'
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="footer-favo bg-black flex gap-8 " >
            <div className="h-full flex flex-col justify-end w-3/12">
                <div className="flex justify-center items-center">
                    <Image
                        src={'/images/لوگو فاوو ایونت.webp'}
                        width={170}
                        height={170}
                        sizes="any"
                        className="mb-8 "
                        alt="تشریفات عروسی فاوو ایونت"
                    />
                </div>

                <div className="footer-favo-socials">
                    <Link href={'#'} className="bg-primary " >
                        <i className="fa-brands fa-telegram text-white" aria-hidden="true"></i>
                    </Link>
                    <Link href={'#'} className="bg-primary " tabIndex={0} autoFocus={true}>
                        <i className="fa-brands fa-instagram text-white" aria-hidden="true" ></i>
                    </Link>
                    <Link href={'#'} className="bg-primary ">
                        <i className="fa-brands fa-whatsapp text-white" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
            <div className="h-full footer-favo-contact pr-10 sm:pr-28 md:pr-32 lg:pr-40 xl:pr-52 w-6/12 ">
                <span className="text-secondary mb-3 text-xl" >شماره تماس</span>
                <div className=" flex flex-col ">
                    <Link href='tel:09125348339' className="text-lg font-bold text-white tracking-widest hover:text-secondary text-right" style={{direction:'ltr'}} >0912 534 8339</Link>
                    <Link href='tel:09129008011' className="text-lg font-bold text-white tracking-widest hover:text-secondary text-right" style={{direction:'ltr'}} >0912 900 8011</Link>
                    <Link href='tel:02122605106' className="text-lg font-bold text-white tracking-widest hover:text-secondary text-right" style={{direction:'ltr'}} >021-22 60 5106</Link>
                </div>
                <span className="mt-4 text-secondary font-semibold text-xl">آدرس</span>
                <p className="text-white spac" style={{ maxWidth: '220px',wordSpacing:'2px' }}>تهران، قیطریه، بزرگراه صدر به شرق، خ قلندری جنوبی ، بن بست دهم، پلاک 1، واحد 3</p>
                <span className="mt-4 text-secondary font-semibold text-xl">خدمات دیگر</span>
                <div className="flex flex-col ">
                    <Link href='https://yarandievent.com' className="text-white hover:text-secondary">برگزاری ایونت</Link>
                    <Link href='https://yarandicatering.com' className="text-white hover:text-secondary">خدمات کترینگ</Link>
                    <Link href='https://barman-a.com' className="text-white hover:text-secondary">تشریفات بارمن</Link>
                </div>
            </div>
            <div className="footer-favo-title w-3/12 relative ">
                <h2 className="block tracking-widest text-primary font-semibold "> CONTACT </h2>
            </div>
        </footer>
    )
}

export default Footer
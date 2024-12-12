import Image from "next/image"

import './Footer.css'
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="footer-favo bg-black flex gap-8 " >
            <div className="h-full flex flex-col justify-end w-1/3">
                <Image
                    src={'/images/لوگو فاوو ایونت.webp'}
                    width={170}
                    height={170}
                    sizes="any"
                    className="mb-8 mr-8"
                    alt="تشریفات عروسی فاوو ایونت"
                />
            </div>
            <div className="h-full footer-favo-contact w-1/3 ">
                <span className="text-secondary font-semibold text-2xl" >شماره تماس</span>
                <div className=" flex flex-col ">
                    <Link href='tel:09125348339' className="font-bold text-white tracking-widest">09125348339</Link>
                    <Link href='tel:09129008011' className="font-bold text-white tracking-widest">09129008011</Link>
                    <Link href='tel:02122605106' className="font-bold text-white tracking-widest">021-22605106</Link>
                </div>
                <span className="mt-4 text-secondary font-semibold text-2xl">آدرس</span>
                <p className="text-white" style={{ maxWidth: '250px' }}>تهران، قیطریه، بزرگراه صدر به شرق، خ قلندری جنوبی ، بن بست دهم، پلاک 1، واحد 3</p>
                <span className="mt-4 text-secondary font-semibold text-2xl">خدمات دیگر</span>
                <div className="flex flex-col ">
                    <Link href='https://yarandievent.com' className="text-white">برگزاری ایونت</Link>
                    <Link href='https://yarandicatering.com' className="text-white">خدمات کترینگ</Link>
                    <Link href='https://barman-a.com' className="text-white">تشریفات بارمن</Link>
                </div>
            </div>
            <div className="footer-favo-title w-1/3 relative ">
                <h2 className="block tracking-widest text-primary font-semibold "> CONTACT </h2>
            </div>
        </footer>
    )
}

export default Footer
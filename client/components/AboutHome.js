import Button1 from './Button1'
import Image from 'next/image'

import './AboutHome.css'




import VideoKhazayi from './VideoKhazayi'


const AboutHome = () => {
    return (
        <div className="about-home flex items-center ">
            <div className="w-3/5 flex-col ">
                <div className='flex '>
                    <h2 className='text-4xl mx-2 font-extrabold text-white ' >فاوو ایونت در یک نگاه</h2>
                    
                    <Image
                        src='/images/icons/magnifier-glass-svgrepo-com.svg'
                        width={48}
                        height={48}
                        className='-translate-y-1'
                        alt='تشریفات عروسی'
                    />
                </div>
                <div>
                    <p className=' mt-2 text-gray-100 '>مجموعه‌ای با سابقه درخشان و قدرتمند در زمینه برگزاری مراسمات تشریفاتی که با استفاده از تیم های متخصص خود مانند ،تیم طراحی ،تیم دکوراسیون ،تیم موسیقی،تیم پذیرایی کترینگ و ... ، فاوو ایونت را به بهترین گزینه برای انتخاب شما مخاطبان عزیز تبدیل کرده است.</p>
                </div>
                <div className='flex justify-between mt-6'>
                    <div>
                        <div className='flex gap-2 items-center'>
                            {/* <HeartIcon className='w-9 text-white' /> */}
                            <Image
                                src='/images/icons/heart-pulse-2-svgrepo-com.svg'
                                width={32}
                                height={32}
                                alt='تشریفات عروسی'
                            />
                            <h3 className='text-white font-bold'>برگزارکننده مراسم عروسی و سالگرد عروسی</h3>
                        </div>
                        <div className='flex gap-2 items-center mt-2'>
                            <Image
                                src='/images/icons/drink-svgrepo-com (3).svg'
                                width={32}
                                height={32}
                                alt='تشریفات عروسی'
                            />
                            <h3 className='text-white font-bold'>برگزارکننده مهمانی های خصوصی</h3>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-2 items-center mt-2'>
                            <Image
                                src='/images/icons/ring-svgrepo-com.svg'
                                width={32}
                                height={32}
                                alt='تشریفات عروسی'
                            />
                            <h3 className='text-white font-bold'>برگزارکننده مراسم عقد و مراسم نامزدی</h3>
                        </div>
                        <div className='flex gap-2 items-center mt-2'>
                            <Image
                                src='/images/icons/cake-2-svgrepo-com.svg'
                                width={32}
                                height={32}
                                alt='تشریفات عروسی'
                            />
                            <h3 className='text-white font-bold'>برگزارکننده مراسم تولد کودک و بزرگسال</h3>
                        </div>
                    </div>
                </div>
                <Button1 bigTitle='بیشتر بدانید' />
            </div>

            <div className="w-2/5 flex justify-center">
                <VideoKhazayi />
            </div>
        </div>
    )
}

export default AboutHome
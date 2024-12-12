import Image from "next/image"
import './IconBox.css'

const IconBox = ({ title, children , direction}) => {
    return (
        <div className={`icon-box flex  ${direction ==='left' ? 'flex-row-reverse' : 'flex-row'} gap-4 p-3 `} >
            <div className="relative w-1/6 flex items-start" >
                <Image
                    src='/images/لوگو فاوو ایونت.webp'
                    alt='تشریفات عروسی فاوو ایونت'
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                    
                />
            </div>

            <div className="w-5/6">
                <h3 className={`text-white text-2xl font-semibold ${direction ==='left' ? 'text-left' : 'text-right'}`}> {title} </h3>
                {children}
            </div>
        </div>
    )
}

export default IconBox
import Image from "next/image"

import logo from '../public/images/لوگو فاوو ایونت.webp'


const Card = ({children , title}) => {
    return (
        <div className="card">
            <Image
                src={logo}
                width={80}
                height={80}
                placeholder="blur"
                alt="لوگو تشریفات عروسی فاوو ایونت"
            />
            
            <h2 className={'mt-4'}>{title}</h2>
            {children}
        </div>
    )
}

export default Card
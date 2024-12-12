import Image from "next/image"

import './CardServices.css'

const CardServices = ({ src, title, description , index}) => {

    return (
        <div className={`mt-16  ${index === 2 ? 'bold-card2' : index === 4 ? 'bold-card2' : index === 6 ? 'bold-card2' : 'card-services' } `} >
            <div className={`card-services-container ${index === 2 ? 'bold-card' : index === 4 ? 'bold-card' : index === 6 ? 'bold-card' : '' }`} >
                <Image
                    fill
                    src={src}
                    alt={src.split('/')[3].split('.')[0]}
                    quality={90}
                    sizes='any'
                />
            </div>
            <h3 className="text-white font-semibold text-xl mt-3 text-center">{title}</h3>
            <p className="text-slate-100 text-sm mt-2 text-center ">{description}</p>

        </div>
    )
}

export default CardServices
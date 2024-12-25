import './ServicesHome.css'
import CardServices from './CardServices'
import { SERVICES_HOME_CARDS } from '@/database/db'

const ServicesHome = () => {

    return (
        <div className='services-home'>
            <div className='pt-14 services-home-head'>
                <h2 className='xl:text-4xl lg:text-3xl text-3xl mx-2 font-extrabold text-white text-center mt-12 '>خدمات خاص فاووایونت</h2>
                <p className='text-slate-100 mt-2 lg:text-base text-sm px-4 text-center'>فاوو ایونت بر آن است تا با استفاده از پتانسیل خود،مجالس عروسی عقد نامزدی و تولد شما را با بالاترین سطح کیفی و کاملا متمایز از هر مراسم دیگر برگزار کند. تخصص ما تحقق رویا و اهداف شماست.</p>
                <hr />
            </div>
            <div className='services-home-content flex-wrap'>
                {
                    SERVICES_HOME_CARDS.map((card, index) => (
                        <CardServices
                            key={card.id}
                            src={card.url}
                            title={card.title}
                            description={card.description}
                            index={index}
                            alt={card.alt}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ServicesHome
import { formatDate2 } from '@/utils/jalali'
import CircleBtn from './CircleBtn'
import './WeblogHome.css'
import Image from 'next/image'
import Link from 'next/link'

const WeblogHome = ({ date, blogSlug, title, thumbnail, brief, number }) => {
    const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT
    
    return (
        <Link href={`/weblogs/${blogSlug}`} className={`weblog-home `}>
            <Image
                src={`${base_url}${thumbnail}`}
                width={350}
                height={400}
                style={{
                    'width': '100%',
                    'height': '100%',
                    'objectFit': 'cover'
                }}
                quality={100}
                alt={title}
                className='weblog-home-thumbnail'
            />
            <div className={`weblog-home-overlay`}>
                <span className='text-white number'>{number}</span><br />
                <span className="text-secondary date">{formatDate2(date)}</span>
                <h3 className="text-white font-semibold title">{title}</h3>
                <p className='brief text-gray-300 text-sm mt-3' >
                    {brief.length > 100 ? brief.slice(0 , 100) + '...' : brief}
                </p>
                <div className='more-btn'>
                    <CircleBtn title='خواندن کامل مقاله' />
                </div>
            </div>

        </Link>
    )
}

export default WeblogHome
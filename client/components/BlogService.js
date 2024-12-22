import Image from "next/image"
import Link from "next/link"
import './BlogService.css'

const BlogService = ({src , title}) => {
    return (
        <Link href={'/'} className="relative">
            <Image
                src={src}
                width={200}
                height={50}
                alt='دکوراسیون مراسم عروسی'
                style={{ 'border': '1px solid #A1A1A1', 'borderRadius': '12px', 'width': '100%', 'height': '80px', 'objectFit': 'cover' }}
            />
            <div className="media-object text-sm  rounded-xl bg-opacity-60 bg-black" style={{  'width': '100%', 'height': '80px', 'zIndex': '100' }}>
                <span className="text-white">{title}</span>
            </div>
        </Link>
    )
}

export default BlogService
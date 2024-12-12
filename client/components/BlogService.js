import Image from "next/image"
import Link from "next/link"

const BlogService = ({src , title}) => {
    return (
        <Link href={'/'} className="relative" style={{ 'marginTop': '100px' }} >
            <Image
                src={src}
                width={200}
                height={50}
                alt='دکوراسیون مراسم عروسی'
                style={{ 'border': '1px solid #A1A1A1', 'borderRadius': '12px', 'width': '100%', 'height': '80px', 'objectFit': 'cover' }}

            />
            <div className="absolute top-0 flex justify-center items-center rounded-xl" style={{ 'backgroundColor': 'rgba(0 ,0 ,0 , 0.4)', 'width': '100%', 'height': '80px', 'zIndex': '100' }}>
                <span className="text-white">{title}</span>
            </div>
        </Link>
    )
}

export default BlogService
import Link from "next/link"
import './Button1.css'


const Button1 = ()=> {
    return(
        <div className="about-read-more-btn">
            <Link href='/' >بیشتر بدانید</Link>
        </div>
    )
}

export default Button1
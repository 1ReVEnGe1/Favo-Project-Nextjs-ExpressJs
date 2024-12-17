import Link from "next/link"
import './PageTop.css'


const PageTop = ({title , img , link}) => {
    return (
        <section className="page_top" style={{backgroundImage:`url('${img}')`}}>
            <div className="page_top_overlay">
                <div className="page_top_container">
                    <h1>{title}</h1>
                    <ul className="breadcrumb">
                        <li className="active_breadcrumb">{title}</li>
                        <li><Link href="/">/ خانه</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PageTop
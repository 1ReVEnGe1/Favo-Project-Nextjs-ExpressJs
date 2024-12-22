import styles from './TableOfContents.module.css' 

const TableOfContents = ({ headings }) => {


    return (
        <div className={`mb-8 block p-5 ${ styles['toc-cont']}`} >
            <span className="text-white text-xs ">آنچه خواهید خواند</span>
            <hr style={{ borderColor: 'rgb(131 130 130)' }} className="mt-4" />
            <ul  className={`pt-4 ${styles['toc-ul']}`}>
                {
                    headings.map((heading, index) => (
                        <li  key={index}  >
                            <a  
                                className="underline block w-full underline-offset-4" 
                                style={{ color: "#DBDBDB" }} 
                                href={`#${heading.id}`}
                                tabIndex={0}
                            >
                                <span style={{color:'#E1D79A'}}> {index + 1}.</span>  {heading.text}
                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default TableOfContents
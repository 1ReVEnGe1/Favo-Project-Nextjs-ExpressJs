import styles from './TableOfContents.module.css' 

const TableOfContents = ({ headings }) => {


    return (
        <div className="mb-8" style={{ background: 'linear-gradient(180deg, #212121, #353535)', border: '1px solid #323232', borderRadius: '24px', padding: '20px', }}>
            <span className="text-white font-bold text-md">آنچه خواهید خواند</span>
            <hr style={{ borderColor: 'rgb(131 130 130)' }} className="mt-4" />
            <ul  className={`pt-4 ${styles['toc-ul']}`}>
                {
                    headings.map((heading, index) => (
                        <li  key={index}  >
                            <a  
                                className="text-sm underline block w-full" 
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
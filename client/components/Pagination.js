import Link from 'next/link'
import styles from './Pagination.module.css'


const Pagination = ({ data, currentPage }) => {

    
    
    

    return (
        <div className={styles.pagination}>
            {//First Page
                (currentPage > 2) && (
                    <>
                        <Link href={`?page=1`}>1</Link>
                        <span className='text-white flex items-center justify-center'>...</span>
                    </>
                )
            }

            {//Prev Page
                (data.hasPrevPage && currentPage > 1) && (
                    <Link href={`?page=${Number(currentPage) - 1}`}>{Number(currentPage) - 1}</Link>
                )
            }

            {//Current Page
                (currentPage > 0) && (
                    <Link className={styles['active-page']} href={`?page=${Number(currentPage)}`}>{Number(currentPage)}</Link>
                )
            }

            {//Next page
                (data.hasNextPage) && (
                    <Link href={`?page=${Number(currentPage) + 1}`}>{Number(currentPage) + 1}</Link>
                )
            }

            {//Last Page
                ((Number(currentPage) + 1) < data.lastPage) && (
                    <>
                        <span className='text-white flex items-center justify-center'>...</span>
                        <Link href={`?page=${data.lastPage}`}>{data.lastPage}</Link>
                    </>
                )
            }
        </div>
    )
}

export default Pagination
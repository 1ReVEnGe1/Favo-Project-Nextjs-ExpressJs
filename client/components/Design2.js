import styles from './Design2.module.css'

const Design2 = () => {
    return (
        <section className={`${styles['design-container']}`}>
            <div className={styles.container}>
                <div className={`${styles.rightDiv1} ${styles.Div}`}>

                </div>
                <div className={`${styles.leftDiv1} ${styles.Div}`}>

                </div>
            </div>
            <div className={styles.container}>
                <div className={`${styles.rightDiv2} ${styles.Div}`}>

                </div>
                <div className={`${styles.leftDiv2} ${styles.Div}`}>

                </div>
            </div>
        </section>
    )
}

export default Design2
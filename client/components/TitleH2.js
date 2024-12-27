import styles from './TitleH2.module.css'

const TitleH2 = ({boldText , text}) => {
    return (
        <section className={`${styles.TitleH2} text-center text-white py-4 `}>
            <h2 >
                <span className=" inline-block border-b-4 border-secondary "> {boldText}</span> {text}
            </h2>
        </section>
    )
}

export default TitleH2
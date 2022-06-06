import styles from "./styles.module.scss";


const Footer = () => {
    return (

        <div className={styles.Footer}>
            <p>Made with Next.JS by</p>
            
            <ul>
            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/martinaaruta/">Martina</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/valeria-scandurra/">Valeria</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/muriel-ingrassia-460a9723a/">Muriel</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/claudio-bozzotta-84a9657a/">Claudio</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/giuseppe-favaro/">Giuseppe</a></li>
            </ul>
        </div>
    )
}

export default Footer;
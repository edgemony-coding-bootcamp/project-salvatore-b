import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Pages.module.scss";





const Checkout = () => {
    return (
        <>
            <Header />
            <div className={styles.Checkout__Card}>
                <img src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-delivery-truck-icon-png-image_314439.jpg" className={styles.Checkout__Icon}/>
                <h2>Grazie per aver Acquistato</h2>
                <h4>perché non acquisti altre cose... cioè ACQUISTA ALTRE COSE!!</h4>
            <button className={styles.Checkout__Button}>Torna Alla Home</button>
            </div>
            <Footer />
        </>
    )
}

export default Checkout;
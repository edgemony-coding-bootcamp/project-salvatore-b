import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Pages.module.scss";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <Header />
      <div className={styles.Checkout__Card}>
        <img
          src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-delivery-truck-icon-png-image_314439.jpg"
          className={styles.Checkout__Icon}
          alt="checkout"
        />
        <h2>Grazie per aver Acquistato</h2>
        <h4>Spero che la tua esperienza in snorlaxon sia stata fantastica!</h4>
        <Link to="/">
          <button className={styles.Checkout__Button}>Torna Alla Home</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;

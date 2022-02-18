import { useStateValue } from "../Libs/StateProvider";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import Subtotale from "../Components/Subtotale";
import styles from "./Pages.module.scss";

const Carrello = () => {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Header />

      <div className={styles.cartPage}>
        <div>
          <div className={styles.cartPage_wrap}>
            {basket?.length === 0 ? (
              <div className={styles.centered}>
                <h2>Il tuo carrello è vuoto</h2>
                <p>Non ci sono articoli nel tuo carrello</p>
              </div>
            ) : (
              <div>
                <h2 className={styles.yourCart}>Il tuo carrello</h2>
                {basket?.map((item) => (
                  <Cart
                    key={item.id}
                    id={item.id}
                    titolo={item.titolo}
                    image={item.image}
                    prezzo={item.prezzo}
                    rating={item.rating}
                    count={item.count}
                  />
                ))}
              </div>
            )}
            {basket?.length > 0 && <Subtotale />}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Carrello;

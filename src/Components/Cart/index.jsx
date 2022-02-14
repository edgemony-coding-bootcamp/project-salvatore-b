import { useStateValue } from "../../Libs/StateProvider";
import { Rating } from "@mui/material";
import styles from "./Cart.module.scss";

const Cart = ({ id, titolo, image, prezzo, descrizione, rating }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const deleteFromCart = () => {
    dispatch({
      type: "RIMUOVI-CARRELLO",
      id,
    });
  };

  return (
    <div key={id} className={styles.Cart}>
      {/* <p className={styles.descCard}>{descrizione}</p> */}
      <img className={styles.product_image} src={image} alt={titolo} />
      <h4 className={styles.product_title}>{titolo}</h4>
      <div>
        <div className={styles.price_rating}>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
          <span className={styles.product_price}>{prezzo} €</span>
        </div>

        <button className={styles.remove_btn} onClick={deleteFromCart}>
          Rimuovi dal carrello
        </button>
      </div>
    </div>
  );
};

export default Cart;
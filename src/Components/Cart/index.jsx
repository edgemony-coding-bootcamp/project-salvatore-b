import { useStateValue } from "../../Libs/StateProvider";
import { Rating } from "@mui/material";
import styles from "./Cart.module.scss";
import { useState } from "react";

const Cart = ({ id, titolo, image, prezzo, descrizione, rating }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  const [count, setCount] = useState(1);
  const deleteFromCart = () => {
    dispatch({
      type: "RIMUOVI-CARRELLO",
      id,
    });
  };

  const prezzoCount= prezzo * count;
  return (
    <div key={id} className={styles.Cart}>
      {/* <p className={styles.descCard}>{descrizione}</p> */}
      <img className={styles.product_image} src={image} alt={titolo} />
      <h4 className={styles.product_title}>{titolo}</h4>
      <div className={styles.RaCoRi}>
        <div className={styles.price_rating}>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
          <br/>
          <span className={styles.product_price}>{prezzoCount.toFixed(2)} €</span>
        </div>
        <div className={styles.counter}>
          <button
            className={styles.countBtn}
            onClick={() => setCount(count - 1)}
            disabled={count <= 1}
          >
            {" "}
            {"-"}
          </button>
          <span>{count}</span>
          <button
            className={styles.countBtn}
            onClick={() => setCount(count + 1)}
          >
            {" "}
            {"+"}{" "}
          </button>
        </div>
        <button className={styles.remove_btn} onClick={deleteFromCart}>
          Rimuovi dal carrello
        </button>
      </div>
    </div>
  );
};

export default Cart;

import { useStateValue } from "../../Libs/StateProvider";
import { Rating } from "@mui/material";
import styles from "./Cart.module.scss";
import { useEffect } from "react";
import { setLengthTitle } from "../../Libs/utils.jsx";

const Cart = ({ id, titolo, image, prezzo, rating, count }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  const selectId = "numItems_" + id;

  const deleteFromCart = () => {
    dispatch({
      type: "RIMUOVI-CARRELLO",
      oggetto: {
        id,
        titolo,
        image,
        prezzo,
        rating,
        count,
      },
    });
  };

  const cambiaQty = () => {
    let select = document.querySelector(`#${selectId}`);
    let numItems = parseInt(select.options[select.selectedIndex].value);

    dispatch({
      type: "COUNTER-CARRELLO",
      oggetto: {
        id,
        titolo,
        image,
        prezzo,
        rating,
        count: numItems,
      },
    });
  };

  useEffect(() => {
    const select = document.querySelector(`#${selectId}`);
    const selectOptions = select.options;
    for (let i = 0; i < selectOptions.length; i++) {
      if (selectOptions[i].value === count) {
        select.selectedIndex = i;
        break;
      }
    }
  });

  return (
    <div key={id} className={styles.Cart}>
      <img className={styles.product_image} src={image} alt={titolo} />

      <div className={styles.titleQuantity}>
        <h4 className={styles.product_title}>{setLengthTitle(titolo, 250)}</h4>
        <div className={styles.counter}>
          <select onChange={cambiaQty} id={selectId}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

      <div className={styles.RaCoRi}>
        <div className={styles.price_rating}>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
          <br />
          <span className={styles.product_price}>
            {(prezzo * count).toFixed(2)} €
          </span>
        </div>

        <button className={styles.remove_btn} onClick={deleteFromCart}>
          Rimuovi dal carrello
        </button>
      </div>
    </div>
  );
};

export default Cart;

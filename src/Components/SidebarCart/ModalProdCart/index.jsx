import { useStateValue } from "../../../Libs/StateProvider";
import styles from "./ModalProdCart.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const ModalProdCart = ({ id, titolo, image, prezzo, count, rating }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const deleteFromCart = () => {
    dispatch({
      type: "RIMUOVI-CARRELLO",
      oggetto: { id, titolo, image, prezzo, rating, count },
    });
  };

  return (
    <div key={id} className={styles.prodcard}>
      <div>
        <img src={image} alt={titolo} className={styles.prodimg} />
      </div>

      <div className={styles.prodrow}>
        <span className={styles.prodprice}>
          {prezzo.toFixed(2)} € x {count}
        </span>

        <span className={styles.sidebarDel} onClick={deleteFromCart}>
          <DeleteIcon fontSize="xsmall" />
        </span>
      </div>
    </div>
  );
};

export default ModalProdCart;

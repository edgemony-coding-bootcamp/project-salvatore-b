import { useStateValue } from "../../../Libs/StateProvider";
import styles from "./ModalProdCart.module.scss"


const ModalProdCart = ({ id, titolo, image, prezzo }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
 
  const deleteFromCart = () => {
    dispatch({
      type: "RIMUOVI-CARRELLO",
      id,
    });
  };

  return (
    <div key={id} className={styles.prodcard}>
    <div><img src={image} alt={titolo} className={styles.prodimg}/></div>
      
      
      <div className={styles.prodrow}>
          <span className={styles.prodprice} >{prezzo.toFixed(2)} €</span>
        
        
        <span className={styles.sidebarDel} onClick={deleteFromCart}>
          🗑️
        </span>
        </div>
      </div>
   
  );
};

export default ModalProdCart;


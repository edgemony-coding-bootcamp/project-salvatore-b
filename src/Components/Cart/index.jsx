
import { useStateValue } from "../../Libs/StateProvider";
import { Rating } from "@mui/material";

const Cart = ({ id, titolo, image, prezzo, descrizione, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  
  const deleteFromCart = () => {
    dispatch({
      type: "RIMUOVI-CARRELLO",
      id,
    });
  };

  return (
    <div key={id}>
      {/* <p className={styles.descCard}>{descrizione}</p> */}
      <img src={image} alt="items-title" />
      <h4>{titolo}</h4>
      <div>
        <div>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
          <span>{prezzo} €</span>
        </div>
        
          <button onClick={deleteFromCart}>
            Rimuovi dal carrello
          </button>
         
       
      </div>
    </div>
  );
};

export default Cart;
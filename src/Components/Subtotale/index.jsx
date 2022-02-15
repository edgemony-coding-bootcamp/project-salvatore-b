import {totaleCarrello} from "../../Libs/reducer";
import { useStateValue } from "../../Libs/StateProvider";
// import { Link } from "react-router-dom";
import styles from "./Subtotale.module.scss";

function Subtotale() {
  const [{ basket }] = useStateValue();

  const sommaProdotti = totaleCarrello(basket).toFixed(2);
 

  return (
    <div className={styles.Subtotale}>
      
      {basket?.length === 1 ? (
        <p>
          Subtotale ({basket?.length} oggetto): <strong>{sommaProdotti} €</strong>
        </p>
      ) : (
        <p>
          Subtotale ({basket?.length} oggetti): <strong>{sommaProdotti} €</strong>
        </p>
      )}

      <div>
        <input type="checkbox" /> Questo ordine contiene un regalo
      </div>
    
      <button className={styles.SubBTN}><a href="/checkout">Procedi all'acquisto</a></button>
      
    </div>
  );
};

export default Subtotale;

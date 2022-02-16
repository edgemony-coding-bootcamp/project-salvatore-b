import {totaleCarrello} from "../../Libs/reducer";
import { useStateValue } from "../../Libs/StateProvider";
import { Link } from "react-router-dom";
import styles from "./Subtotale.module.scss";

function Subtotale({id}) {
  const [{ basket }, dispatch] = useStateValue();

  const sommaProdotti = totaleCarrello(basket).toFixed(2);
  
  const svuotacart = () => {
    dispatch({
      type: "SVUOTA-CARRELLO", id,
    });
  };

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
    
      <Link to="/checkout"><button className={styles.SubBTN} onClick={svuotacart}>Procedi all'acquisto</button></Link>
      
    </div>
  );
};

export default Subtotale;

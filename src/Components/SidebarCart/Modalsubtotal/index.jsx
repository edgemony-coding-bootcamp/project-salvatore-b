import {totaleCarrello} from "../../../Libs/reducer";
import { useStateValue } from "../../../Libs/StateProvider";
import { Link } from "react-router-dom";
import styles from "./Modalsubtotal.module.scss"
function Modalsubtotal() {
  const [{ basket }] = useStateValue();

  const sommaProdotti = totaleCarrello(basket).toFixed(2);
 

  return (
    <div className={styles.subT}>
        <p className={styles.textMod} > Subtotale </p>
        <p className={styles.subTMod}><strong>{sommaProdotti} €</strong> </p>
     
      <Link to="/carrello"><button className={styles.sidebarBtn}>Vai al carrello</button></Link>
    </div>
  );
};

export default Modalsubtotal;
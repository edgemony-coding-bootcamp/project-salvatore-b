import { getBasketTotal } from "../../../Libs/reducer";
import { useStateValue } from "../../../Libs/StateProvider";
import { Link } from "react-router-dom";
import styles from "./Modalsubtotal.module.scss";


function Modalsubtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className={styles.subT}>
      <p className={styles.textMod}> Subtotale </p>

      <p className={styles.subTMod}>
        <strong>{getBasketTotal(basket).toFixed(2)} €</strong>
      </p>

      <Link to="/carrello">
        <button className={styles.sidebarBtn}>Vai al carrello</button>
      </Link>
    </div>
  );
}

export default Modalsubtotal;

import ModalProdCart from "./ModalProdCart";
// import { Link } from "react-router-dom";
import Modalsubtotal from "./Modalsubtotal";
import { useStateValue } from "../../Libs/StateProvider";
import styles from "./SidebarCart.module.scss";

const SidebarCart = () => {
  const [{ basket }] = useStateValue();
  return (
    <aside className={styles.sidebarLayout}>
      {basket?.length > 0 && <Modalsubtotal />}

      <div className={styles.sectionProd}>
        {basket?.map((item, index) => (
          <ModalProdCart
            key={index}
            id={item.id}
            image={item.image}
            prezzo={item.prezzo}
            count={item.count}
          />
        ))}
      </div>
    </aside>
  );
};

export default SidebarCart;

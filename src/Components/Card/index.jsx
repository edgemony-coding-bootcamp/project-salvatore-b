import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import styles from "./Card.module.scss";

const Card = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "prodotto"));
      const currentProdotti = querySnapshot.docs.map((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        return obj;
      });
      console.log(currentProdotti);
      setProduct(currentProdotti);
    };
    getData();
  }, []);

  return (
    <div className={styles.Wrapper}>
      {product.map((items) => (
        <div key={items.id} className={styles.Card}>
          <img src={items.image} alt="items-title" />
          <h4 className={styles.title_card}>{items.titolo}</h4>
          {/* <p>{items.descrizione}</p> */}
          <div className={styles.PrRaBtn}>
            <div className={styles.Price_Rating}>
              <span>⭐ {items.rating} <br/></span>
              <span>{items.prezzo} €</span>
            </div>
            <div>
              <button>Acquista ora</button>
            </div>
          </div>
        </div>
      ))}

      {/* <p>Categoria</p>
            <img src="#" />
            <p>Titolo</p>
            <p>Descrizione Hover</p>
            <p>Money$$$</p>
            <p>Rating da prendere material icon</p>
            <button>Buy Now</button> */}
    </div>
  );
};

export default Card;

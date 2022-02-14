import { useEffect, useState, useContext } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Rating } from "@mui/material";
import styles from "./Card.module.scss";
import { Context } from '../../Pages/Home';

const Card = (props) => {
  const [product, setProduct] = useState([]);
  const { value } = useContext(Context);

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
      // console.log(currentProdotti);
      props.category ? setProduct(currentProdotti.filter((items) => items.categoria === `${props.category}`)) : setProduct(currentProdotti);
      // console.log(props.category);
    };
    getData();
  }, [props]);

  // useEffect(() => {
  //   const search = product.filter(
  //     (prod) =>
  //       prod.toLowerCase().included(value.toLowerCase())
  //   )
  //   setProduct(search);
  // }, [value]) //da sistemare

  return (
    
      <div className={styles.Wrapper}>
      {/* <h1>Hai cercato: {value}</h1> */}
      {product.map((items) => (
        <div key={items.id} className={styles.Card}>
          <p className={styles.descCard}>{items.descrizione}</p>
          <img src={items.image} alt="items-title" />
          <h4 className={styles.title_card}>{items.titolo}</h4>
          <div className={styles.PrRaBtn}>
            <div className={styles.Price_Rating}>
            
            <Rating name="half-rating-read" defaultValue={items.rating} precision={0.5} readOnly />
              <span>{items.prezzo} €</span>
            </div>
            <div className={styles.btnAB}>
              <button className={styles.btnAdd}>Aggiungi al carrello</button>
              <button className={styles.btnBuy}>Acquista ora</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    
  );
};

export default Card;

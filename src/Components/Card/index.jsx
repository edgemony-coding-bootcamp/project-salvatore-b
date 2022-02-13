import { useEffect, useState, useContext } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
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
      console.log(props.category);
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
    <>
      <h1>Hai cercato: {value}</h1>
      <div className={styles.Wrapper}>
        {product.map((items) => (
          <div key={items.id} className={styles.Card}>
            <img src={items.image} alt="items-title" />
            <h4>{items.titolo}</h4>
            <p>{items.descrizione}</p>
            <div className={styles.Price_Rating}>
              <p> Rate {items.rating} </p>
              <p>{items.prezzo} €</p>
            </div>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;

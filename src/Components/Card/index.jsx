import { useEffect, useState, useContext } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Rating } from "@mui/material";
import styles from "./Card.module.scss";
import { Context } from "../../Pages/Home";
import { useStateValue } from "../../Libs/StateProvider";

const Card = ({ category }) => {
  const [product, setProduct] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  const { value } = useContext(Context);

  const checkInclusi = (valore) =>
    basket.find((prod) => prod.titolo.includes(valore));

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
      category
        ? setProduct(
            currentProdotti.filter((items) => items.categoria === `${category}`)
          )
        : setProduct(currentProdotti);
    };
    getData();
  }, [category]);

  const addToCart = (items) => {
    dispatch({
      type: "AGGIUNGI-CARRELLO",
      oggetto: {
        id: items.id,
        titolo: items.titolo,
        image: items.image,
        prezzo: items.prezzo,
        descrizione: items.descrizione,
        rating: items.rating,
      },
    });
  };

  return (
    <div className={styles.Wrapper} style={{marginRight: (basket?.length > 0) && "100px" }}>
      {product.map(
        (items) =>
          items.titolo.toLowerCase().includes(value.toLowerCase()) && (
            <div key={items.id} className={styles.Card}>
              <p className={styles.descCard}>{items.descrizione}</p>
              <img src={items.image} alt="items-title" />
              <h4 className={styles.title_card}>{items.titolo}</h4>
              <div className={styles.PrRaBtn}>
                <div className={styles.Price_Rating}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={items.rating}
                    precision={0.5}
                    readOnly
                  />
                  <span>{items.prezzo.toFixed(2)} €</span>
                </div>
                <div className={styles.btnAB}>
                  <button
                    onClick={() => addToCart(items)}
                    className={styles.btnAdd}
                    disabled={checkInclusi(items.titolo)}
                  >
                    {!checkInclusi(items.titolo)
                      ? "Aggiungi al carrello"
                      : "Già nel carrello"}
                  </button>
                  <button className={styles.btnBuy}>
                    <a href="/checkout">Acquista ora</a>
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Card;

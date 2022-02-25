import { useEffect, useState, useContext } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Rating } from "@mui/material";
import { Context } from "../../Pages/Home";
import { useStateValue } from "../../Libs/StateProvider";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ category, pagElements, setMaxElements }) => {
  
  const [product, setProduct] = useState([]);
  const [{ user, basket }, dispatch] = useStateValue();
  const { value } = useContext(Context);
  let navigate = useNavigate();

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
    setMaxElements(product.length);
  }, [category, product.length, setMaxElements]);

  const buyNow = () => {
    if (!user){navigate("/login")
  } else {
    navigate("/checkout")
  }
};

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
    <div className={styles.Wrapper} style={{marginRight: (basket?.length > 0) && "calc(50% - 660px)" }}>
      {product.slice(0, pagElements).map(
        (items) =>
          items.titolo.toLowerCase().includes(value.toLowerCase()) && (
            <div key={items.id} className={styles.Card}>
              <Link to={`/prodotto/${items.id}`}><img src={items.image} alt="items-title" loading="lazy"/></Link>
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
                  <button className={styles.btnBuy} onClick={buyNow}>
                  Acquista ora
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
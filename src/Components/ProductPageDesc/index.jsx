import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useStateValue } from "../../Libs/StateProvider";
import { Rating } from "@mui/material";
import styles from "./ProductPageDesc.module.scss"

const ProductPageDesc = () => {
  let { id } = useParams();
  const [{ basket }, dispatch] = useStateValue();

  const [product, setProduct] = useState([]);

  const checkInclusi = (valore) =>
    basket.find((prod) => prod.titolo.includes(valore));

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

  const svuotacart = () => {
    dispatch({
      type: "SVUOTA-CARRELLO"
    });
  };

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
      const found = currentProdotti.find(element => element.id === parseInt(id));
      setProduct(found);
    };
    getData();
  }, [id]);


  return (

    <div key={product.id} className={styles.Card}>
      <div>
        <img src={product.image} alt="items-title" />
      </div>
      <div className={styles.parteDestra}>
        <div className={styles.Title_Rating}>
          <h4 className={styles.title_card}>{product.titolo}</h4>
          <div className={styles.ratingStelle}>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              precision={0.5}
              readOnly
            />
          </div>
          <hr /> <br/>
          <div className={styles.prezzoBtn}>
          <p>Prezzo: <span>{parseFloat(product.prezzo).toFixed(2)} €</span></p>
          <div className={styles.btnAB}>
            <button
              onClick={() => addToCart(product)}
              className={styles.btnAdd}
              disabled={checkInclusi(product.titolo)}
            >
              {!checkInclusi(product.titolo)
                ? "Aggiungi al carrello"
                : "Già nel carrello"}
            </button>
            <button className={styles.btnBuy}
              onClick={svuotacart}>
              <Link to="/checkout">Acquista ora</Link>
            </button>
          </div>
          </div><br/>
          <hr />
          <p className={styles.descCard}>{product.descrizione}</p>

        </div>
      </div>
    </div>

  )
}

export default ProductPageDesc;
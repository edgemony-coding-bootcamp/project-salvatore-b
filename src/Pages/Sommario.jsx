import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../Libs/StateProvider";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getBasketTotal } from "../Libs/reducer";
import { Rating } from "@mui/material";
import { db } from "../firebase";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Sommario.module.scss";

const Sommario = () => {
    const [{ user, basket }, dispatch] = useStateValue();
    const [profUser, setProfUser] = useState({});
    let navigate = useNavigate();
    // 

    const svuotacart = () => {
        dispatch({
            type: "SVUOTA-CARRELLO",
            // id,
        });
    };

    const getTotalItems = () => {
        return basket.reduce(
            (total, currentItem) => (total += currentItem.count),
            0
        );
    };

    useEffect(() => {
        if ((!basket) || (!user)) navigate("/");

        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "utenti"));
            const currentUtente = querySnapshot.docs.map((doc) => {
                const obj = {
                    id: doc.id,
                    ...doc.data(),
                };
                return obj;
            });

            const checkUtente = currentUtente.find((prof) => (prof.user_uid).includes(user.uid));
            setProfUser(checkUtente);
        };
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
            <Header />

            <div className={styles.Sommario}>

                <h1>Riepilogo Ordine</h1>
                <hr />

                <div className={styles.addressSection}>
                    <h2>Il tuo indirizzo:</h2>
                    <p>{profUser.indirizzo}</p>
                </div>

                <hr />

                <div className={styles.cartSection}>
                    <h2>Il tuo carrello:</h2>
                    <div>
                        {basket?.map((item) => (
                            <div key={item.id} className={styles.productSection}>
                                <img src={item.image} alt={item.titolo} />
                                <div>
                                    <h3>{item.titolo}</h3>
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={item.rating}
                                        precision={0.5}
                                        readOnly
                                    />
                                    <p>{(item.prezzo).toFixed(2)} € x {item.count}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <hr />

                <div className={styles.paymentSection}>
                    <h2>Metodo di Pagamento:</h2>

                    <div>
                        <div>
                            <input type="number" name="cardnumber" minLength={16} maxLength={16} placeholder="Numero Carta" />
                            <input type="text" name="month" placeholder="MM" />
                            <input type="text" name="year" placeholder="AA" />
                            <input type="number" name="cvc" minLength={3} maxLength={3} placeholder="CVC" />
                        </div>

                        <h3>Totale Ordine: {getBasketTotal(basket).toFixed(2)} €</h3>

                        <Link to="/checkout">
                            <button
                                disabled={getTotalItems() === 0}
                                // className={styles.SubBTN}
                                onClick={svuotacart}
                            >
                                Procedi all'acquisto
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Sommario;

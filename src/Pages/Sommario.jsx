import { useNavigate } from "react-router-dom";
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
    const [errors, setErrors] = useState(false);

    const [cardNumber, setCardNumber] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [name, setName] = useState("");

    let navigate = useNavigate();

    const validatePayment = () => {
        if ((cardNumber.trim().length === 16) && (month.trim().length === 2 && (parseInt(month) > 0 &&
            parseInt(month) < 13)) && (year.trim().length === 2 && (parseInt(year) > 21 && parseInt(year) < 30))
            && (cvc.trim().length === 3) && (name.trim().length > 3 && name.trim().match(/([A-Za-z]( )[A-Za-z]+$)/))) {
            svuotacart();
            navigate("/checkout");
            window.scrollTo(0, 0);
        } else {
            setErrors(true);
        }
    };

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
        if (!user) navigate("/login");
        if (!basket) navigate("/");

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

                <h1>Riepilogo Ordine ({getTotalItems()} {getTotalItems() > 1 ? "prodotti" : "prodotto"})</h1>
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
                            <div className={styles.card}>💳</div>

                            <input type="text" name="cardNumber" minLength={16} maxLength={16} placeholder="Numero Carta" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />
                            <input type="text" name="month" minLength={2} maxLength={2} placeholder="MM" value={month} onChange={(event) => setMonth(event.target.value)} />/
                            <input type="text" name="year" minLength={2} maxLength={2} placeholder="AA" value={year} onChange={(event) => setYear(event.target.value)} />
                            <input type="text" name="cvc" minLength={3} maxLength={3} placeholder="CVC" value={cvc} onChange={(event) => setCvc(event.target.value)} />

                            <input type="text" name="titolare" minLength={3} placeholder="Nome del titolare" value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <small style={{ color: errors ? "red" : "transparent" }}>I campi non sono stati compilati correttamente</small>

                        <h3>Totale Ordine: {getBasketTotal(basket).toFixed(2)} €</h3>

                        <button onClick={validatePayment}>
                            Procedi all'acquisto
                        </button>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Sommario;

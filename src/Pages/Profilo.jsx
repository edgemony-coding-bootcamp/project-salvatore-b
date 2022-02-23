import { useStateValue } from "../Libs/StateProvider";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Pages.module.scss";
import { useNavigate } from "react-router-dom";

const Profilo = () => {
    const [{ user }] = useStateValue();
    const [profUser, setProfUser] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate("/");
        
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
            <section className={styles.containerProfile}>
                <div>
                    <img src="https://www.globusvet.it/wp-content/uploads/2019/01/utente-blog-generico.png" alt="user-logo" width="250px"  loading="lazy"/>
                </div>
                <div >
                    <h3>Nome completo:</h3>
                    <p>{profUser.nome}</p>
                    <h3>Email:</h3>
                    <p>{profUser.email}</p>
                    <h3>Indirizzo:</h3>
                    <p>{profUser.indirizzo}</p>
                </div>
            </section>
            <Footer />

        </>
    )
}


export default Profilo;

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useStateValue } from "../Libs/StateProvider";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import styles from "./Pages.module.scss";



const Profilo = () => {
//     const auth = getAuth();
    const [{ user }] = useStateValue();
    const [profUser, setProfUser] = useState({});


    useEffect(() => {
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
            console.log(currentUtente);
            setProfUser(checkUtente);
        };
        getData();


    }, [user]);

    return (
        <>
            <Header />
            <section className={styles.containerProfile}>
                <div>
                    <img src="https://www.globusvet.it/wp-content/uploads/2019/01/utente-blog-generico.png" alt="" width="250px" />
                </div>
                <div >
                    <h3>Nome completo:</h3> <p>{profUser.nome}</p>

                    <h3>Email:</h3><p>{profUser.email}</p>
                    <h3>Indirizzo:</h3>{profUser.indirizzo}
                </div>
            </section>
            <Footer />

        </>
    )
}


export default Profilo;

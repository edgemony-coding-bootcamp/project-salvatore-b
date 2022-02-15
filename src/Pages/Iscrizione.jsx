import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

const Iscrizione = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [address, setAddress] = useState("");
  const [nome, setNome] = useState("");
  let navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();
    if (password === passwordConf) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.email);
        //   const uid = userCredential.uid;

        //    firebase.firestore().collection("utenti").doc(uid).set({
        //     user_uid: uid,
        //     indirizzo: address,
        //     nome: nome,
        //     email: email,
        //   });
          navigate("/");
        })
        .catch((error) => alert(error.message));
    } else {
      alert("La password inserita non coincide con la prima!");
    }
  };

  return (
    <div className={styles.Login}>
      <div className={styles.header}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://firebasestorage.googleapis.com/v0/b/clone-8164f.appspot.com/o/amazonlogo.png?alt=media&token=00fe6716-3b35-4c7f-92b2-1b5c9fcfa0c6"
            alt="amazon"
          />
        </Link>
      </div>

      <div className={styles.form}>
        <form>
          <h1>Accedi</h1>

          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            autoComplete="off"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            required
          />

          <label htmlFor="ConfermaPass">Conferma Password</label>
          <input
            value={passwordConf}
            onChange={(event) => setPasswordConf(event.target.value)}
            type="password"
            name="ConfermaPass"
            required
          />
          <label htmlFor="Nome">Inserisci il tuo nome completo</label>
          <input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            type="text"
            name="Nome"
            required
          />

          <label htmlFor="Indirizzo">
            Inserisci il tuo indirizzo di spedizione
          </label>
          <input
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            type="text"
            name="indirizzo"
            required
          />

          <button onClick={register}>Conferma la Registrazione</button>
          <p>
            Accedendo al tuo account dichiari di aver letto e accetti le nostre
            Condizioni generali di uso e vendita. Prendi visione della nostra
            Informativa sulla privacy, della nostra Informativa sui Cookie e
            della nostra Informativa sulla Pubblicità definita in base agli
            interessi.
          </p>
        </form>
      </div>
      <footer className={styles.footer}>
        <ul>
          <li>Condizioni d'uso</li>
          <li>Informativa sulla privacy</li>
          <li>Aiuto</li>
          <li>Informativa sui Cookie</li>
          <li>Informativa sulla Pubblicità definita in base agli interessi</li>
        </ul>

        <small>© Snorlax Team - 2022</small>
      </footer>
    </div>
  );
};

export default Iscrizione;

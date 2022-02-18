import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { db } from "./../firebase";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./Login.module.scss";

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

          const newUser = {
            user_uid: user.uid,
            nome: nome,
            email: email,
            indirizzo: address,
          };

          console.log(newUser);
          addDoc(collection(db, "utenti"), newUser);
          navigate("/");
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Le password non corrispondono");
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
            placeholder="Almeno 6 caratteri"
            required
          />

          <label htmlFor="ConfermaPass">Verifica password</label>
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

          <button onClick={register}>Continua</button>
          <p>
            Registrandoti dichiari di aver letto e accetti integralmente le
            nostre Condizioni generali di uso e vendita. Prendi visione della
            nostra Informativa sulla privacy, della nostra Informativa sui
            Cookie e della nostra Informativa sulla Pubblicità definita in base
            agli interessi.
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

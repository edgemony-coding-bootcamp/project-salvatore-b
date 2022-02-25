import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  let navigate = useNavigate();

  const loginFunction = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        navigate('/');
      })
      .catch((error) => {
        setErrors(error.code);
        if (error.code === "auth/wrong-password") setPassword("");
      });
  }

  return (
    <div className={styles.Login}>
      <div className={styles.header}>
        <Link to="/">
          <img className={styles.logo} src="https://firebasestorage.googleapis.com/v0/b/clone-8164f.appspot.com/o/Snorlaxon%20(2).png?alt=media&token=e9732c2b-8565-4550-b014-7255f44f608e"
            alt="snorlaxUp"
            loading="lazy" />
        </Link>
      </div>

      <div className={styles.form}>

        <form>
          <h1>Accedi</h1>

          <label htmlFor="email">E-mail</label>
          <input
            style={{borderColor: (errors === "auth/user-not-found" || errors === "auth/invalid-email" || errors === "auth/missing-email" ) && "red"}}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Indirizzo Email"
            required
          />
          {(errors === "auth/invalid-email" || errors === "auth/missing-email") && <small>Email non valida</small>}
          {errors === "auth/user-not-found" && <small>Utente non trovato</small>}
          {!(errors === "auth/invalid-email" || errors === "auth/missing-email" || errors === "auth/user-not-found") && <small style={{ color:"transparent" }}>no error</small>}          

          <label htmlFor="password">Password</label>
          <input
            style={{borderColor: (errors === "auth/wrong-password" || errors === "auth/internal-error") && "red"}}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {errors === "auth/wrong-password" && <small>Password non corretta</small>}
          {errors === "auth/internal-error" && <small>Inserisci la password</small>}
          {!(errors === "auth/wrong-password" || errors === "auth/internal-error") && <small style={{ color:"transparent" }}>no error</small>}

          <button
            type="submit"
            onClick={loginFunction}
          >
            Continua
          </button>

          <p>
            Accedendo al tuo account dichiari di aver letto e accetti le nostre Condizioni generali di uso e vendita. Prendi visione della nostra Informativa sulla privacy, della nostra Informativa sui Cookie e della nostra Informativa sulla Pubblicità definita in base agli interessi.
          </p>
        </form>


        <div className={styles.divider}>
          <p>Sei nuovo su Snorlaxon?</p>
        </div>

        <button className={styles.register}>
          <Link to="/iscrizione">Crea il tuo Account Snorlaxon</Link>
        </button>

      </div>

      <footer className={styles.footer}>

        <ul>
          <li>Condizioni d'uso</li>
          <li>Informativa sulla privacy</li>
          <li>Aiuto</li>
          <li>Informativa sui Cookie</li>
          <li>Informativa sulla Pubblicità</li>
        </ul>

        <small>
          © Snorlax Team - 2022
        </small>

      </footer>

    </div>
  );
};

export default Login;
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
  const [errors, setErrors] = useState("");
  let navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();

    if (nome.trim() === "" || nome.trim().length <= 5 || !nome.trim().match(/([A-Za-z]( )[A-Za-z]+$)/)) {
      setErrors("Nome non valido")
    } else {
      if (address.trim() === "" || address.trim().length <= 5 || !address.trim().match(/([A-Za-z]( )[A-Za-z]+( )[0-9])/)) {
        setErrors("Indirizzo non valido");
      } else {
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

              addDoc(collection(db, "utenti"), newUser);
              navigate("/");
            })
            .catch((error) => {
              setErrors(error.code);
              if (error.code === "auth/weak-password" || error.code === "auth/internal-error") setPassword("");
            });
        } else {
          setErrors("Le password non corrispondono");
          setPassword("");
          setPasswordConf("");
        }
      }
    }
  };

  return (
    <div className={styles.Login}>
      <div className={styles.header}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://firebasestorage.googleapis.com/v0/b/clone-8164f.appspot.com/o/Snorlaxon%20(2).png?alt=media&token=e9732c2b-8565-4550-b014-7255f44f608e"
            alt="snorlaxUp"
            loading="lazy"
          />
        </Link>
      </div>

      <div className={styles.form}>
        <form>
          <h1>Registrati</h1>

          <label htmlFor="Nome">Inserisci il tuo nome completo</label>
          <input
            style={{borderColor: (errors === "Nome non valido") && "red"}}          
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            type="text"
            name="Nome"
            placeholder="Nome Cognome"
            required
          />
          {errors === "Nome non valido" ? <small>Inserisci il tuo nome</small> : <small style={{ color:"transparent" }}>no error</small>}

          <label htmlFor="Indirizzo">
            Inserisci il tuo indirizzo di spedizione
          </label>
          <input
            style={{borderColor: (errors === "Indirizzo non valido") && "red"}}   
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            type="text"
            name="indirizzo"
            placeholder="Es. Via Roma 123"
            required
          />
          {errors === "Indirizzo non valido" ? <small>Indirizzo non valido</small> : <small style={{ color:"transparent" }}>no error</small>}

          <label htmlFor="email">E-mail</label>
          <input
            style={{borderColor: (errors === "auth/email-already-in-use" || errors === "auth/invalid-email" || errors === "auth/missing-email") && "red"}}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Indirizzo Email"
            required
          />
          {errors === "auth/email-already-in-use" && <small>Email già in uso</small>}
          {(errors === "auth/invalid-email" || errors === "auth/missing-email") && <small>Email non valida</small>}
          {!(errors === "auth/email-already-in-use" || errors === "auth/invalid-email" || errors === "auth/missing-email") && <small style={{ color:"transparent" }}>no error</small>}

          <label htmlFor="password">Password</label>
          <input
            style={{borderColor: (errors === "auth/weak-password" || errors === "auth/internal-error" || errors === "Le password non corrispondono") && "red"}}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            placeholder="Almeno 6 caratteri"
            required
          />
          {(errors === "auth/weak-password" ||  errors === "auth/internal-error") ? <small>Almeno 6 caratteri</small> : <small style={{ color:"transparent" }}>no error</small>}

          <label htmlFor="ConfermaPass">Verifica password</label>
          <input
            style={{borderColor: (errors === "Le password non corrispondono") && "red"}}
            value={passwordConf}
            onChange={(event) => setPasswordConf(event.target.value)}
            type="password"
            name="ConfermaPass"
            placeholder="Conferma la password"
            required
          />
          {errors === "Le password non corrispondono" ? <small>Le password non corrispondono</small> : <small style={{ color:"transparent" }}>no error</small>}

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
          <li>Informativa sulla Pubblicità</li>
        </ul>

        <small>© Snorlax Team - 2022</small>
      </footer>
    </div>
  );
};

export default Iscrizione;

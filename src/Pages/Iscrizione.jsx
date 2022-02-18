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
  const [errors, setErrors] = useState("");

  const register = (event) => {
    event.preventDefault();

    if (nome.trim() === "" || nome.trim().length <= 5 || !nome.trim().match(/([A-Za-z]( )[A-Za-z]+$)/)) {
      setErrors("Nome non valido")
      setNome("");
    } else {
      if (address.trim() === "" || address.trim().length <= 5 || !address.trim().match(/([A-Za-z]( )[A-Za-z]+( )[0-9])/)) {
        setErrors("Indirizzo non valido");
        setAddress("");
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

              console.log(newUser);
              addDoc(collection(db, "utenti"), newUser);
              navigate("/");
            })
            .catch((error) => {
              setErrors(error.code);
              console.log(error.code);
              if (error.code === "auth/email-already-in-use" || error.code === "auth/invalid-email") setEmail("");
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
            src="https://firebasestorage.googleapis.com/v0/b/clone-8164f.appspot.com/o/amazonlogo.png?alt=media&token=00fe6716-3b35-4c7f-92b2-1b5c9fcfa0c6"
            alt="amazon"
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
            placeholder={errors === "Nome non valido" ? "Inserisci il tuo nome" : ""}
            required
          />

          <label htmlFor="Indirizzo">
            Inserisci il tuo indirizzo di spedizione
          </label>
          <input
            style={{borderColor: (errors === "Indirizzo non valido") && "red"}}   
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            type="text"
            name="indirizzo"
            placeholder={errors === "Indirizzo non valido" ? "Indirizzo non valido" : ""}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            style={{borderColor: (errors === "auth/email-already-in-use" || errors === "auth/invalid-email" || errors === "auth/missing-email") && "red"}}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            autoComplete="off"
            placeholder={(errors === "auth/email-already-in-use" ? "Email già in uso" : "") || ((errors === "auth/invalid-email" || errors === "auth/missing-email") ? "Email non valida" : "")}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            style={{borderColor: (errors === "auth/weak-password" || errors === "auth/internal-error" || errors === "Le password non corrispondono") && "red"}}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            placeholder={(errors === "auth/weak-password" ||  errors === "auth/internal-error") ? "Almeno 6 caratteri" : ""}
            required
          />

          <label htmlFor="ConfermaPass">Verifica password</label>
          <input
            style={{borderColor: (errors === "Le password non corrispondono") && "red"}}
            value={passwordConf}
            onChange={(event) => setPasswordConf(event.target.value)}
            type="password"
            name="ConfermaPass"
            placeholder={errors === "Le password non corrispondono" ? "Le password non corrispondono" : ""}
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

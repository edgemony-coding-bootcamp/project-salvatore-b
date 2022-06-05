import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { RiCloseCircleFill } from 'react-icons/ri';
// import { postUserCredentials } from '../../utils';

export default function ModalSignup({ viewModalSignup, setViewModalSignUp, getCredentials }) {
  const [inputMailValue, setInputMailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");

  const visible = viewModalSignup.visible || false;

  const classes = [styles.ModalSignup, visible ? styles.visible : ""];

  const onSubmit = (e) => {
    event.preventDefault();

    getCredentials(inputMailValue, inputPasswordValue);
    console.log("credenziali in modale", inputMailValue, inputPasswordValue);
    setViewModalSignUp({
      visible: false,
    })
  };

  const closeModal = () => {
    setViewModalSignUp({
      visible: false,
    })
  }


  return (
    <div className={classes.join(" ")}>
      <div className={styles.modal}>
      <button className={styles.closemodal} onClick={()=> closeModal()}><RiCloseCircleFill/></button>
        <h2>Sign Up</h2>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="email"
            id="email"
            placeholder="user@mail.com"
            value={inputMailValue}
            onChange={(e) => setInputMailValue(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            required
            value={inputPasswordValue}
            onChange={(e) => setInputPasswordValue(e.target.value)}
          />
          <input type="submit" value="Create Account" />
        </form>
      </div>
    </div>
  );
}

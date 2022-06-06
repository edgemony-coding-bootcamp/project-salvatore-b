import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { RiCloseCircleFill } from 'react-icons/ri';
// import { postUserCredentials } from '../../utils';
import { useRouter } from "next/router";

export default function ModalSignup({ viewModalSignup, setViewModalSignUp }) {

  const router = useRouter();

  const visible = viewModalSignup.visible || false;

  const classes = [styles.ModalSignup, visible ? styles.visible : ""];



  const closeModal = () => {
    setViewModalSignUp({
      visible: false,
    })
  }

  const signOut = () => {
    // localStorage.clear();
    localStorage.removeItem("token");

    router.push("/login")
    
  };

  return (
    <div className={classes.join(" ")}>
      <div className={styles.modal}>
      <button className={styles.closemodal} onClick={()=> closeModal()}><RiCloseCircleFill/></button>
        <p>Do you want to log out?</p>
        <button onClick={signOut}>Yes</button>
      </div>
    </div>
  );
}

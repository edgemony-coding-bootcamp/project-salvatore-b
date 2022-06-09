import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import Player from "../../components/Player";
import UserLogged from "../../components/UserLogged";
import ModalSignup from "../../components/ModalSignup";
import { useState } from "react";
import styles from "./styles.module.scss";

const LayoutDefault = ({ children }) => {
  function parloaLayout() {
    setViewModalSignUp({
      visible: true,
    });
  }

  const [viewModalSignup, setViewModalSignUp] = useState({
    visible: false,
  });

  return (
    <>
      <header className={styles.navbar}>
        <Navbar />
      </header>

      <div className={styles.ModalSignup}>
        <ModalSignup
          setViewModalSignUp={setViewModalSignUp}
          viewModalSignup={viewModalSignup}
        />
      </div>

      <main className={styles.main}>
        {children}
        <div className={styles.user}>
          <UserLogged parloaLayout={parloaLayout} />
        </div>
      </main>

      <div className={styles.player_container}>
        <Player />
      </div>
    </>
  );
};

export default LayoutDefault;

import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import Player from "../../components/Player";
import UserLogged from "../../components/UserLogged";
import ModalSignup from "../../components/ModalSignup";
import {useState} from "react";
import styles from "./styles.module.scss";

const LayoutDefault = ({ children, credentials }) => {
  function parloaLayout() {
    console.log("sei in layout");
    setViewModalSignUp({
      visible: true,
    });
  }

  const [viewModalSignup, setViewModalSignUp] = useState({
    visible: false,
  });

  console.log('credenziali in layout default', credentials);

  return (
    <>
      <header className={styles.navbar}>      
        <Navbar />
      </header>

      <div className={styles.ModalSignup}>
        <ModalSignup setViewModalSignUp={setViewModalSignUp} viewModalSignup={viewModalSignup} />
      </div>

      <main className={styles.main}>{children}</main>

      <div className={styles.user}>
        <UserLogged parloaLayout={parloaLayout} credentials={credentials}/>
      </div>

      {/* <footer className={styles.footer}>
            <Footer />
        </footer>  */}

      {/* <div className={styles.player}>
        <Player />
      </div> */}
    </>
  );
};

export default LayoutDefault;

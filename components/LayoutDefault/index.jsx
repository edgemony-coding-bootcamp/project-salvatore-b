import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import Player from "../../components/Player";

import styles from "./styles.module.scss"


const LayoutDefault = ({ children }) => {
    return (
      <>
        <header className={styles.navbar}>
            <Navbar />
        </header>

        <main className={styles.main}>
            {children}
        </main>
  
        {/* <footer className={styles.footer}>
            <Footer />
        </footer>  */}
        <div className={styles.player}>
            <Player />
        </div>
      </>
    );
  };
  
  export default LayoutDefault;
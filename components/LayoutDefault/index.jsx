import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import Player from "../../components/Player";
import UserLogged from "../../components/UserLogged";
import styles from "./styles.module.scss";

const LayoutDefault = ({ children, parloadHome }) => {
  function parloaLayout() {
    console.log("sei in layout");
    parloadHome()
  }

  return (
    <>
      <header className={styles.navbar}>
        <Navbar />
      </header>

      <main className={styles.main}>{children}</main>

      <div className={styles.user}>
        <UserLogged parloaLayout={parloaLayout} />
      </div>

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

import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import styles from "./Pages.module.scss";

const Home = () => {
  return (
    <div className={styles.Wrapper_Home}>
    <Header/>
    <Hero/>
    <Card/>
    <Footer/>
    </div>
  );
};

export default Home;

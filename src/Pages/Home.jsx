import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import styles from "./Pages.module.scss";
import { createContext, useState } from "react";
export const Context = createContext({ value: "", setValue: () => {} });

const Home = ({category}) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.Wrapper_Home}>
      <Context.Provider value={{value, setValue}}>
        <Header/>
        <Hero/>
        <Card category={category} />
      </Context.Provider>
      <Footer/>
    </div>
  );
};

export default Home;

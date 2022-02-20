import Header from "../Components/Header";
import SidebarCart from "../Components/SidebarCart";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import styles from "./Pages.module.scss";
import Drawer from '@material-ui/core/Drawer';
import { createContext, useState } from "react";
import { useStateValue } from "../Libs/StateProvider";
export const Context = createContext({ value: "", setValue: () => { } });


const Home = ({ category }) => {
  const [{ basket }] = useStateValue();
  const [value, setValue] = useState("");

  return (
    <div className={styles.Wrapper_Home}>
      <Context.Provider value={{ value, setValue }}>
        {basket?.length > 0 &&
          <Drawer anchor='right' open={true} variant="persistent">
            <SidebarCart />
          </Drawer>
        }
        <Header />
        <Hero />
        <Card category={category}/>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Home;

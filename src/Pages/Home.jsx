import Header from "../Components/Header";
import SidebarCart from "../Components/SidebarCart";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import FooterModale from "../Components/Footer/FooterModale";
import styles from "./Pages.module.scss";
import Drawer from "@material-ui/core/Drawer";
import { createContext, useState } from "react";
import { useStateValue } from "../Libs/StateProvider";

export const Context = createContext({ value: "", setValue: () => {} });

const Home = ({ category }) => {
  const [{ basket }] = useStateValue();
  const [value, setValue] = useState("");
  const [pagElements, setPagElements] = useState(12);
  const [maxElements, setMaxElements] = useState();

  //FOOTERMODALE
  const [isfootmod, setisfootmod] = useState(false);
  const handleSnorlaxModal = () => {
    setisfootmod(true);
  };
  const closeFootModal = () => {
    setisfootmod(false);
  };

  return (
    <div className={styles.Wrapper_Home}>
      <Context.Provider value={{ value, setValue }}>
        {basket?.length > 0 && (
          <Drawer anchor="right" open={true} variant="persistent">
            <SidebarCart />
          </Drawer>
        )}
        <div onClick={closeFootModal}>
          <Header />
          <Hero />
          <Card category={category} pagElements={pagElements} setMaxElements={setMaxElements}/>
          {pagElements < maxElements && <button className={styles.showMore} onClick={() => setPagElements(pagElements + 12)}>Mostra altri prodotti</button>}
        </div>
        <Footer handleSnorlaxModal={handleSnorlaxModal} />
        {isfootmod && <FooterModale closeFootModal={closeFootModal} />}
      </Context.Provider>
    </div>
  );
};

export default Home;

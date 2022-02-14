import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import styles from "./Pages.module.scss";
import { useStateValue } from "../Libs/StateProvider";
import Cart from "../Components/Cart";
import { Link } from "react-router-dom";

const Carrello = () => {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Header />

      <div>
        <div>
          {basket?.length === 0 ? (
            <>
              <h2>Il tuo carrello è vuoto</h2>
              <p>Non ci sono articoli nel tuo carrello</p>
            </>
          ) : (
            <div>
              <h2>Il tuo carrello</h2>
              {basket?.map((item, index) => (
                <Cart
                  key={index}
                  id={item.id}
                  titolo={item.titolo}
                  image={item.image}
                  prezzo={item.prezzo}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {/* {basket?.length > 0 && (
          <div>
            <h1>TOTALE</h1>
          </div>
        )} */}
      </div>
      <Link to="/">
        <button>Torna Alla Home</button>
      </Link>
      <Footer />
    </>
  );
};

export default Carrello;

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useStateValue } from "./Libs/StateProvider";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import Carrello from "./Pages/Carrello";
import Iscrizione from "./Pages/Iscrizione";
import styles from "./App.module.scss";
import Profilo from "./Pages/Profilo";
import Sommario from "./Pages/Sommario";

function App() {
  // eslint-disable-next-line no-unused-vars
  const auth = getAuth();
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/libri"
          element={<Home category="W18zO0uFpy1Ux3OLibri" />}
        />
        <Route
          path="/gaming"
          element={<Home category="gQMf7U2u7VP3WxGAMING" />}
        />
        <Route
          path="/beauty"
          element={<Home category="tFwGEENG8c0sIqbeauty" />}
        />
        <Route
          path="/elettronica"
          element={<Home category="LzDn3CtuhElettronica" />}
        />
        <Route
          path="/cucina"
          element={<Home category="izV883zg7TPzROcucina" />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/iscrizione" element={<Iscrizione />} />
        {/* <Route path="/user" element={<h1>Il mio account</h1>} /> */}

        <Route path="/profilo" element={<Profilo />} />
        <Route path="/carrello" element={<Carrello />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sommario" element={<Sommario />} />
      </Routes>

    </div>
  );
}

export default App;

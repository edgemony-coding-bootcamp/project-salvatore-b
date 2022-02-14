
import styles from './App.module.scss';
import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <div className={styles.App}>
    
     <Routes>

        <Route path="/" element={<Home /> } />
        <Route path="/libri" element={<Home category="W18zO0uFpy1Ux3OLibri" /> } />
        <Route path="/gaming" element={<Home category="gQMf7U2u7VP3WxGAMING" /> } />
        <Route path="/beauty" element={<Home category="tFwGEENG8c0sIqbeauty" /> } />
        <Route path="/elettronica" element={<Home category="LzDn3CtuhElettronica" /> } />
        <Route path="/cucina" element={<Home category="izV883zg7TPzROcucina" /> } />
  
        <Route path="/login" element={<Login />} />

        <Route path="/profilo" element={ <h1>Profilo</h1>} />

        <Route path="/checkout" element={<Checkout/>} />

     </Routes>
      {/* <Header />  search bar login logo link utili carrello category*/} 
      {/* <Hero />  Carousel effetto sfocatura  */}
      {/* <Card /> wrapper prodotti carousel */}
      {/* <Footer /> Made by torna su link utili policy metodi di pagamento amazon aiuto  */}
    </div>
  );
}

export default App;

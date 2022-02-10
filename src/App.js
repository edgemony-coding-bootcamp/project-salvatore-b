
import styles from './App.module.scss';
import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/Login"

function App() {
  return (
    <div className={styles.App}>
    
     <Routes>

        <Route path="/" element={<Home /> } />
  
        <Route path="/login" element={<Login />} />

        <Route path="/profilo" element={ <h1>Profilo</h1>} />

        <Route path="/checkout" element={<h1>Checkout</h1>} />

     </Routes>
      {/* <Header />  search bar login logo link utili carrello category*/} 
      {/* <Hero />  Carousel effetto sfocatura  */}
      {/* <Card /> wrapper prodotti carousel */}
      {/* <Footer /> Made by torna su link utili policy metodi di pagamento amazon aiuto  */}
    </div>
  );
}

export default App;

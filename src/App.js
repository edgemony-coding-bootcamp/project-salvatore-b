
import styles from './App.module.scss';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>

     <Routes>

        <Route path="/" element={<h1>Home</h1>} />

        <Route path="/login" element={<h1>Login</h1>} />

        <Route path="/profilo" element={ <h1>Profilo</h1>} />

        <Route path="/checkout" element={<h1>Checkout</h1>} />

     </Routes>

    </div>
  );
}

export default App;

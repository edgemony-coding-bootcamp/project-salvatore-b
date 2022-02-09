import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";

  
const Card = () => 
{


const [product, setProduct] = useState([]);


useEffect( () => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "prodotti"));
const currentProdotti = querySnapshot.docs.map(doc => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        return obj;
      });
      console.log(currentProdotti);
      setProduct(currentProdotti);
    }
    getData()
  },[]);


    return (
        <div>
{product.map((items) => (
         <li key={items.id}>
         <h4>{items.titolo}</h4>
         <p>{items.prezzo}</p>
         <img src={items.image} alt="items-title"/>
         </li>
       ))} 

            {/* <p>Categoria</p>
            <img src="#" />
            <p>Titolo</p>
            <p>Descrizione Hover</p>
            <p>Money$$$</p>
            <p>Rating da prendere material icon</p>
            <button>Buy Now</button> */}
        </div>
    );
};

export default Card

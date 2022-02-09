import React from "react";

// import Fullscreen from "react-image-gallery";
import styles from './Hero.module.scss';

// const images = [
//   {
//     original: "https://m.media-amazon.com/images/I/81OH+cHhEvL._SX3000_.jpg",
//   },
   
// ];

const Hero = () => {
  return (
    <div className={styles.hero}>
          <img src={"https://m.media-amazon.com/images/I/81OH+cHhEvL._SX3000_.jpg"} alt=""/>
    </div>
  );
};

export default Hero;

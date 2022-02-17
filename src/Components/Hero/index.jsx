import { useState } from "react";

import styles from "./Hero.module.scss";

const Hero = () => {

  const images = [
    "https://m.media-amazon.com/images/I/71rG91MSnoL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71AmZIC92xL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Rqda8lu9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Z1vXziB8L._SX3000_.jpg"
  ]

  const [index, setIndex] = useState(0);

  return (
    <div className={styles.containerHero}>
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <div className={styles.imgRef}>
            <img src={images[index]} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.btnS}>
        <button
          type="button"
          className={styles.btn}
          onClick={(index < 1) ? () => setIndex(images.length-1) : () => setIndex(index-1)}
        >
          {"<"}
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={index === (images.length) ? setIndex(0) : () => setIndex(index+1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Hero;

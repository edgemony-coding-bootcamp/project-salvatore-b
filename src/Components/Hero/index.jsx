import React from "react";
import { useRef } from "react";

import styles from "./Hero.module.scss";

const Hero = () => {
  const ref = (element, direction) => {
    if (direction === "left") element.current.scrollLeft += 1520;
    if (direction === "right") element.current.scrollLeft -= 1520;
  };

  const carousel = useRef();

  return (
    <div className={styles.containerHero}>
      <div className={styles.hero} ref={carousel}>
        <div className={styles.heroImg}>
          <div className={styles.imgRef}>
            <img
              src={
                "https://m.media-amazon.com/images/I/81OH+cHhEvL._SX3000_.jpg"
              }
              alt=""
            />
            <img
              src={
                "https://m.media-amazon.com/images/I/71rG91MSnoL._SX3000_.jpg"
              }
              alt=""
            />
            <img
              src={
                "https://m.media-amazon.com/images/I/71AmZIC92xL._SX3000_.jpg"
              }
              alt=""
            />
            <img
              src={
                "https://m.media-amazon.com/images/I/71Rqda8lu9L._SX3000_.jpg"
              }
              alt=""
            />
            <img
              src={
                "https://m.media-amazon.com/images/I/71Z1vXziB8L._SX3000_.jpg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.btnS}>
        <button
          type="button"
          className={styles.btn}
          onClick={() => ref(carousel, "right")}
        >
          {"<"}
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => ref(carousel, "left")}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Hero;

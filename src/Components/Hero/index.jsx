import React from "react";
import { useRef } from "react";

// import Fullscreen from "react-image-gallery";
import styles from './Hero.module.scss';

// const images = [
//   {
//     original: "https://m.media-amazon.com/images/I/81OH+cHhEvL._SX3000_.jpg",
//   },
   
// ];

const Hero = () => {

  const ref = (element, direction) => {
    if (direction === "left") element.current.scrollLeft += 1170;
    if (direction === "right") element.current.scrollLeft -= 1170;
}

const carousel = useRef();


  return (
    <div className={styles.containerHero}>
    <div className={styles.hero} ref={carousel}>
    <div className={styles.heroImg}>
      <div className={styles.imgRef}>
            <img src={"https://m.media-amazon.com/images/I/81OH+cHhEvL._SX3000_.jpg"} alt=""/>
            <img src={"https://m.media-amazon.com/images/I/81OH+cHhEvL._SX3000_.jpg"} alt=""/>
      </div>
      </div>
    </div>
    <div className={styles.btnS}>
                <button type="button" className={styles.btn} onClick={() => ref(carousel, "right") }>{"<"}</button>
                <button type="button" className={styles.btn} onClick={() => ref(carousel, "left") }>{">"}</button>

            </div>
            </div>
  );
};

export default Hero;

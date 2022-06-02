import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { putRatingAlbum } from '../../utils';

export default function StarRating({ album }) {
  const [rating, setRating] = useState(album.rating);
  const [hover, setHover] = useState(0);

  useEffect(()=>{
    putRatingAlbum(album.id, {
      rating: rating
    })
  },[rating])

  return (
    <div className={styles.star_rating}>
      {[...Array(5)].map((star, index) => { index +=1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? styles.on : styles.off}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={styles.star}>{styles.off ? <AiFillStar/> : ''}</span>
          </button>
        );
      })}
    </div>
  );
}

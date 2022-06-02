import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { putRatingAlbum, putRatingPlaylist } from '../../utils';

export default function StarRating({ album, playlist }) {
  console.log('il tuo rating album è', album?.rating);
  console.log('il tuo rating playlist è', playlist?.rating);
  const InitialRating = album ? album?.rating : playlist?.rating;
  const [rating, setRating] = useState(InitialRating);
  const [hover, setHover] = useState(0);
  
  useEffect(()=>{
    {album ?
      putRatingAlbum(album?.id, {
        rating: rating
      })
     :
      putRatingPlaylist(playlist?.id, {
        rating: rating
      })
    }
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

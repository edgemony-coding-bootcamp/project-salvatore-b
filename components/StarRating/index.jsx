import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { AiFillStar } from 'react-icons/ai';
import { putRatingAlbum, putRatingPlaylist } from '../../utils';

export default function StarRating({ album, playlist }) {

  const InitialRating = album ? album.rating : playlist.rating;

  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(InitialRating);


  useEffect(()=>{
    {album ?

      putRatingAlbum(album?.id, {...album, rating: rating})

     :

      putRatingPlaylist(playlist?.id, {...playlist, rating: rating})

    }
  // eslint-disable-next-line
  },[rating])




  return (
    <div className={styles.star_rating}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || album?.rating || playlist?.rating) ? styles.on : styles.off}
            onClick={() => {setRating(index)}}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star"><AiFillStar size="1.2rem"/></span>
          </button>
        );
      })}
    </div>
  );

}
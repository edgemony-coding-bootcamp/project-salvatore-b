import SongList from "../../components/SongsList";
import styles from "./styles.module.scss";
import StarRating from '../../components/StarRating';
import { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillHeart,AiOutlineHeart} from 'react-icons/ai';

import {putPlaylist} from "../../utils";

import LayoutDefault from "../../components/LayoutDefault";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://edgemony-backend.herokuapp.com/playlist/${id}`
  );
  const data = await res.json();

  return {
    props: { playlist: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://edgemony-backend.herokuapp.com/playlist/`);
  const data = await res.json();

  const paths = data.map((playlist) => {
    return {
      params: { id: playlist.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default function PlaylistId({ playlist }) {

  const [playlistLocal,setPlaylistLocal] = useState(playlist);

  const AddDelFavorite = () => { 

    setPlaylistLocal({...playlist, favorite: !playlistLocal.favorite});
  }

  useEffect(() => {

    if (playlistLocal !== undefined) {
      
      putPlaylist(playlist.id , playlistLocal);

    } 
  // eslint-disable-next-line
  },[playlistLocal])



  
  return (
    <>
    
  <LayoutDefault>

  <div className={styles.wrapper}>

    <div className={styles.box}>
      <div className={styles.box__cover}>
        <Image
          src={playlist.cover}
          alt={playlist.title}
          width={200}
          height={200}
        />
      </div>


      <div className={styles.box__info}>

        <h1>{playlist.title}</h1>
        <p>
          {playlist.artist} ft. {playlist.featuring.join(", ")}
        </p>
        <p>{playlist.year}</p>
        <p>{playlist.genres.join(" ")}</p>

        <div className={styles.box__info__actions}>
          <button onClick={() => AddDelFavorite()}>
            {playlistLocal.favorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
          <StarRating playlist={playlist} />
        </div>

      </div>


  </div>



    <SongList playlist={playlist} />
  </div>

  </LayoutDefault>

    </>
  );
}

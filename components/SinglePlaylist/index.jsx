import {getSinglePlaylist} from "../../utils";
import { useState, useEffect } from "react";

import LayoutDefault from "../../components/LayoutDefault";
import Image from "next/image";
import styles from "./styles.module.scss";

import SongList from "../../components/SongsList";
import StarRating from "../../components/StarRating";

import { AiFillHeart,AiOutlineHeart,AiOutlineDislike } from 'react-icons/ai';
import {putPlaylist} from "../../utils";

import { useRouter } from "next/router";


const SinglePlaylist = ({id}) => {

    const router = useRouter();

    const [playlist, setPlaylist] = useState({
      cover: "",
      featuring: [],
      genres: [],
      songs: []
    });



    useEffect(() => {
      if (id) {
        getSinglePlaylist(id).then((data) => setPlaylist(data))
      }
    },[id])

   


    const AddDelFavorite = () => { 

        setPlaylist({...playlist, favorite: !playlist.favorite});
    }
  
    useEffect(() => {
  
      if (playlist !== undefined) {
        
        putPlaylist(playlist.id , playlist);
  
      } 
    // eslint-disable-next-line
    },[playlist])




    const hideElement = () => {


      // Array contenente gli users
      const users = playlist.users;

      //Id proveniente dal Local Storage
      const idToRemove = parseInt(localStorage.getItem("userId"));

      // Cancello l'user creando un nuovo array di utenti senza quest'ultimo
      const filteredUsers = users.filter(item => item !== idToRemove)
        

      // Ricreo l'oggetto playlist con gli users aggiornati
      const playlistLocal = {...playlist, users: [...filteredUsers] };



      // Infine faccio la PUT

      // console.log("Oggetto playlist originale ===>", playlist)
      // console.log("Oggetto playlist modificato ===>", playlistLocal);

      // console.log("cosa passerò alla PUT", {...playlistLocal})

      putPlaylist(playlist.id, {...playlistLocal});

      router.push("/");

    }




    return (

    <LayoutDefault>
    
    <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.box__cover}>
              <img
                src={playlist?.cover}
                alt={playlist?.title}
                width="200"
                height="200"
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
                  {playlist.favorite ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
               
                <StarRating playlist={playlist} />
                <button onClick={hideElement}><AiOutlineDislike /></button> 
              </div>

            </div>
   
          </div>

          <SongList playlist={playlist} />

        </div>
 
    </LayoutDefault>
        
    )
    
}

export default SinglePlaylist;
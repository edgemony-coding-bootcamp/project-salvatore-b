import {getSingleAlbum} from "../../utils";
import { useState, useEffect } from "react";

import LayoutDefault from "../../components/LayoutDefault";
import Image from "next/image";
import styles from "./styles.module.scss";

import SongList from "../../components/SongsList";
import StarRating from "../../components/StarRating";

import { AiFillHeart,AiOutlineHeart,AiOutlineDislike } from 'react-icons/ai';
import {putAlbum} from "../../utils";

import { useRouter } from "next/router";



const SingleAlbum = ({id}) => {

    const router = useRouter();

    const [album, setAlbum] = useState({
      cover: "",
      featuring: [],
      genres: [],
      songs: []
    });

    useEffect(() => {
      if (id) {
        getSingleAlbum(id).then((data) => setAlbum(data))
      }
    },[id])
  

    useEffect(() => {
  
      if (album !== undefined) {
        
        putAlbum(album.id , album);
  
      } 
    // eslint-disable-next-line
    },[album])


    const AddDelFavorite = () => { 

      setAlbum({...album, favorite: !album.favorite});
    }




    const hideElement = () => {



      // Array contenente gli users
      const users = album.users;

      //Id proveniente dal Local Storage
      const idToRemove = parseInt(localStorage.getItem("userId"));

      // Cancello l'user creando un nuovo array di utenti senza quest'ultimo
      const filteredUsers = users.filter(item => item !== idToRemove)
        

      // Ricreo l'oggetto album con gli users aggiornati
      const albumLocal = {...album, users: [...filteredUsers] };



      // Infine faccio la PUT

      putAlbum(album.id, {...albumLocal});

      router.push("/");


    }







    return (

    <LayoutDefault>
    
    <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.box__cover}>

            {/* <Image src={album?.cover} alt={album?.title} width={200} height={200} /> */}

             <img
                src={album?.cover}
                alt={album?.title}
                width="200"
                height="200"
              /> 
            </div>

            <div className={styles.box__info}>

              <h1>{album.title}</h1>
              <p>
                {album.artist} ft. {album.featuring.join(", ")}
              </p>
              <p>{album.year}</p>
              <p>{album.genres.join(" ")}</p>

              <div className={styles.box__info__actions}>
                <button onClick={() => AddDelFavorite()}>
                  {album.favorite ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>

                <button onClick={hideElement}><AiOutlineDislike /></button> 
                
                <StarRating  album={album} />
              </div>

            </div>
   
          </div>

          <SongList album={album} />

        </div>
 
    </LayoutDefault>
        
    )
    
}

export default SingleAlbum;
import {getSinglePlaylist} from "../../utils";
import { useState, useEffect } from "react";

import LayoutDefault from "../../components/LayoutDefault";
import Image from "next/image";
import styles from "./styles.module.scss";

import SongList from "../../components/SongsList";
import StarRating from "../../components/StarRating";

import { AiFillHeart,AiOutlineHeart} from 'react-icons/ai';
import {putPlaylist} from "../../utils";




const SinglePlaylist = ({id}) => {

    const [playlist, setPlaylist] = useState({
      cover: "",
      featuring: [],
      genres: [],
      songs: []
    });

    // const {tokenForAll, setTokenForAll} = useContext(MyContext);
    // const {idUser, setIdUser} = useContext(MyContext);

    // console.log("id e token ===>>>>>", idUser,tokenForAll)

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
      console.log("Okkkk")
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
                <button onClick={hideElement}>Hide</button> 
              </div>

            </div>
   
          </div>

          <SongList playlist={playlist} />

        </div>
 
    </LayoutDefault>
        
    )
    
}

export default SinglePlaylist;
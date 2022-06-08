import {getSingleAlbum} from "../../utils";
import { useState, useEffect } from "react";

import LayoutDefault from "../../components/LayoutDefault";
import Image from "next/image";
import styles from "./styles.module.scss";

import SongList from "../../components/SongsList";
import StarRating from "../../components/StarRating";

import { AiFillHeart,AiOutlineHeart} from 'react-icons/ai';
import {putAlbum} from "../../utils";




const SingleAlbum = ({id}) => {

    const [album, setAlbum] = useState({
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
        getSingleAlbum(id).then((data) => setAlbum(data))
      }
    },[id])

   


    const AddDelFavorite = () => { 

      setAlbum({...album, favorite: !album.favorite});
    }
  
    useEffect(() => {
  
      if (album !== undefined) {
        
        putAlbum(album.id , album);
  
      } 
    // eslint-disable-next-line
    },[album])



    const hideElement = () => {
      console.log("Okkkk")
    }




    return (

    <LayoutDefault>
    
    <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.box__cover}>
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
               
                <StarRating album={album} />
                <button onClick={hideElement}>Hide</button> 
              </div>

            </div>
   
          </div>

          <SongList album={album} />

        </div>
 
    </LayoutDefault>
        
    )
    
}

export default SingleAlbum;
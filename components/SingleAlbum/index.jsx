import {getSingleAlbum} from "../../utils";
import { useState, useEffect } from "react";

import LayoutDefault from "../../components/LayoutDefault";
import Image from "next/image";
import styles from "./styles.module.scss";

import SongList from "../../components/SongsList";
import StarRating from "../../components/StarRating";

const SingleAlbum = ({id}) => {

    const [album, setAlbum] = useState({});



    useEffect(() => {
        getSingleAlbum(id).then((data) => setAlbum(data))
    },[])

   
 



    return (

    <LayoutDefault>
    

    <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.box__cover}>
              <Image
                src={album.cover}
                alt={album.title}
                width={200}
                height={200}
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
        
                <StarRating album={album} />
              </div>

              
           
            </div>
            

          </div>

          <SongList album={album} />
        </div>
 
  

    </LayoutDefault>
        
    )
    
}

export default SingleAlbum;
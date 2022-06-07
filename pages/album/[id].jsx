import { useRouter } from "next/router";

import SongList from "../../components/SongsList";
import styles from "./styles.module.scss";
import StarRating from "../../components/StarRating";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import {TOKEN} from "../../utils/token"

import { MyContext } from "../../Context/context";

import { putAlbum } from "../../utils";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import LayoutDefault from "../../components/LayoutDefault";

import SingleAlbum from "../../components/SingleAlbum";


export default function AlbumId() {

  // const [albumLocal, setAlbumLocal] = useState(album);

  const {tokenForAll, setTokenForAll} = useContext(MyContext);

  console.log("Siamo nella dinanima token ==>", tokenForAll)


  const router = useRouter();
  const { id } = router.query;




  const AddDelFavorite = () => {
    setAlbumLocal({ ...album, favorite: !albumLocal.favorite });
  };

  // useEffect(() => {
  //   if (albumLocal !== undefined) {

  //     putAlbum( album.id, albumLocal);


  //   }
  // // eslint-disable-next-line
  // }, [albumLocal]);





  return (
    <>

    <SingleAlbum id={id} />




      {/* <LayoutDefault>
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
                <button onClick={() => AddDelFavorite()}>
                  {albumLocal.favorite ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
                <StarRating album={album} />
              </div>

              
           
            </div>
            

          </div>

          <SongList album={album} />
        </div>
      </LayoutDefault> */}





    </>
  );
}

import SongList from "../../components/SongsList";
import styles from "./styles.module.scss";
import StarRating from '../../components/StarRating';
import { useState} from "react";

import {putAlbum} from "../../utils";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { AiFillHeart,AiOutlineHeart} from 'react-icons/ai';


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://edgemony-backend.herokuapp.com/albums/${id}`
  );
  const data = await res.json();

  return {
    props: { album: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://edgemony-backend.herokuapp.com/albums/`);
  const data = await res.json();

  const paths = data.map((album) => {
    return {
      params: { id: album.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default function AlbumId({ album }) {

const [isPopped, setPopped] = useState(false);




  const AddFavorite = async () => {

    if(album.favorite === true) { // Caso 1: favorite è true dall' API. Settalo a false

      setPopped(!isPopped);
      await putAlbum(album.id , {
        favorite: false
      })

      console.log("Caso 1: favorite è true dall' API. Settalo a false")

    } else { // Caso 2: favorite è false favorite dall' API. Settalo a true

      setPopped(!isPopped);
      await putAlbum(album.id , {
        favorite: true
      })

      console.log("Caso 2: favorite è false favorite dall' API. Settalo a true")

    }

  }



  return (
    <>

      <header className={styles.navbar}>
        <Navbar />
      </header>



      <main className={styles.main}>
        <div className={styles.wrapper}>

          <div className={styles.box}>
            <div className={styles.box__cover}>
              <img src={album.cover} alt={album.title} width="200" height="200" />
            </div>

            <div className={styles.box__info}>
              <h1>{album.title}</h1>
              <p>
              {album.artist} ft. {album.featuring.join(", ")}
              </p>
              <p>{album.year}</p>
              <p>{album.genres.join(" ")}</p>

              <button onClick={() => AddFavorite()}>{isPopped ? <AiFillHeart/> : <AiOutlineHeart/>  }</button>
            </div>

            <div className={styles.box__rating}>
              <StarRating album={album}/>
            </div>

   

          </div>


          

          <SongList album={album } />
        </div>
      </main>



      <footer className={styles.footer}>
        <Footer />        
      </footer>




    </>
  );
}

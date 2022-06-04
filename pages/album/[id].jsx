import SongList from "../../components/SongsList";
import styles from "./styles.module.scss";
import StarRating from "../../components/StarRating";
import { useState, useEffect } from "react";
import Image from "next/image";


import { putAlbum } from "../../utils";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import LayoutDefault from "../../components/LayoutDefault";

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
  const [albumLocal, setAlbumLocal] = useState(album);

  const AddDelFavorite = () => {
    setAlbumLocal({ ...album, favorite: !albumLocal.favorite });
  };

  useEffect(() => {
    if (albumLocal !== undefined) {
      putAlbum(album.id, albumLocal);
    }
  }, [albumLocal]);

  console.log(album.cover);

  return (
    <>
      <LayoutDefault>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.box__cover}>
              <Image
                src={album.cover}
                alt={album.title}
                width={200}
                height={200}
                layout="responsive"
              />
            </div>

            <div className={styles.box__info}>
              <h1>{album.title}</h1>
              <p>
                {album.artist} ft. {album.featuring.join(", ")}
              </p>
              <p>{album.year}</p>
              <p>{album.genres.join(" ")}</p>

              <button onClick={() => AddDelFavorite()}>
                {albumLocal.favorite ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
            </div>

            <div className={styles.box__rating}>
              <StarRating album={album} />
            </div>
          </div>

          <SongList album={album} />
        </div>
      </LayoutDefault>
    </>
  );
}

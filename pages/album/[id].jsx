import { useRouter } from "next/router";
// import styles from "./styles.module.scss";
import SingleAlbum from "../../components/SingleAlbum";

import { useContext } from "react";
import { MyContext } from "../../Context/context";




export default function AlbumId() {

  const {tokenForAll, setTokenForAll} = useContext(MyContext);
  const {idUser, setIdUser} = useContext(MyContext);


  const router = useRouter();
  const { id } = router.query;


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

import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import SinglePlaylist from "../../components/SinglePlaylist";

import { useContext } from "react";
import { MyContext } from "../../Context/context";





export default function PlaylistId({ playlist }) {


  const router = useRouter();
  const { id } = router.query;
  

  // const [playlistLocal,setPlaylistLocal] = useState(playlist);

  // const AddDelFavorite = () => { 

  //   setPlaylistLocal({...playlist, favorite: !playlistLocal.favorite});
  // }

  // useEffect(() => {

  //   if (playlistLocal !== undefined) {
      
  //     putPlaylist(playlist.id , playlistLocal);

  //   } 
  // // eslint-disable-next-line
  // },[playlistLocal])



  
  return (
    <>
    <SinglePlaylist id={id} />

  {/* <LayoutDefault>

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

  </LayoutDefault> */}

    </>
  );
}

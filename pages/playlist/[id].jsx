import SongList from "../../components/SongsList";
import styles from "./styles.module.scss";
import StarRating from '../../components/StarRating';

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://edgemony-backend.herokuapp.com/playlist/${id}`
  );
  const data = await res.json();

  return {
    props: { playlist: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://edgemony-backend.herokuapp.com/playlist/`);
  const data = await res.json();

  const paths = data.map((playlist) => {
    return {
      params: { id: playlist.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default function PlaylistId({ playlist }) {
  return (
    <>
      <div className={styles.hero} >
        <div className={styles.all}>
          <div className={styles.img_container}>
            <img src={playlist.cover} />
          </div>
          <div className={styles.info}>
            <h1>{playlist.title}</h1>
            <p>
              {playlist.artist} ft. {playlist.featuring.join(", ")}
            </p>
            <p>{playlist.year}</p>
            <p>{playlist.genres.join(" ")}</p>
            <StarRating playlist={playlist}/>
          </div>
        </div>
      </div>
      <SongList playlist={playlist}/>
    </>
  );
}

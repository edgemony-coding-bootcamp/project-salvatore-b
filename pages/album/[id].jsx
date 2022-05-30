import SongList from "../../components/SongsList";
import styles from "./styles.module.scss";

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
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.all}>
          <div className={styles.img_container}>
            <img src={album.cover} />
          </div>
          <div className={styles.info}>
            <h1>{album.title}</h1>
            <p>
              {album.artist}, {album.featuring.join(", ")}
            </p>
            <p>{album.year}</p>
            <p>{album.genres.join(" ")}</p>
          </div>
        </div>
      </div>
      <SongList album={album }/>
    </>
  );
}

import styles from "./styles.module.scss";

export default function CardAlbum({ albumsData }) {
  return (
    <div className={styles.all}>
      {albumsData &&
        albumsData.map((album) => (
          <div className={styles.CardAlbum} key={album.id}>
            <div className={styles.img_container}>
              <img></img>
            </div>
            <div className={styles.info_container}>
              <h2>{album.title}</h2>
              <p className={styles.year}>{album.year}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

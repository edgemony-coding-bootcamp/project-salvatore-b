import styles from "./styles.module.scss";
import Link from "next/link";

export default function CardAlbum({ albumsData, inputSearchValue }) {
  return (
    <div className={styles.all}>
      {albumsData &&
        albumsData
          .filter(
            (album) =>
              album.title
                .toLowerCase()
                .trim()
                .includes(inputSearchValue.toLowerCase().trim()) ||
              album.genres
                .toString()
                .toLowerCase()
                .trim()
                .includes(inputSearchValue.toLowerCase().trim())
          )

          .map((album) => (
            <div className={styles.CardAlbum} key={album.id}>
              <Link href={`album/${album.id}`} key={album.id}>
                <a>
                  <div className={styles.img_container}>
                    <img></img>
                  </div>
                  <div className={styles.info_container}>
                    <h2>{album.title}</h2>
                    <p className={styles.year}>{album.year}</p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
    </div>
  );
}

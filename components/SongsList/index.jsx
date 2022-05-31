import styles from "./styles.module.scss";

import React from "react";

export default function SongList({ album }) {
  return (
    <div>
      <ol >
        {album.songs.map((song) => (
          <li className={styles.song_container} key={song}>{song}</li>
        ))}
      </ol>
    </div>
  );
}

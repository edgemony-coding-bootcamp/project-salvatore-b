import styles from "./styles.module.scss";

import React from "react";

export default function SongList({ album, playlist }) {

  function viewPlayer(){
    speaktoDinamicPage()
  }

  return (
    album ? 
    <div className={styles.SongList} >
      <ol>
        {album?.songs.map((song) => (
          <li key={song}>
            {song}
          </li>
        ))}
      </ol>
    </div>
   : (
    <div className={styles.SongList}>
      <ol>
        {playlist?.songs.map((song) => (
          <li key={song}>
            {song}
          </li>
        ))}
      </ol>
    </div>
  ));
}

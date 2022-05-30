import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CardAlbum from "../components/CardAlbum";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { getAlbum, getPlaylist } from "../utils";
import { useState } from "react";
import InputSearch from "../components/InputSearch";

export default function Home() {
  const [albumsData, setAlbumsData] = useState([]);
  const [playlistData, setPlaylistData] = useState([]);
  const [inputSearchValue, setinputSearchValue] = useState('');

  useEffect(() => {
    getAlbum().then((data) => setAlbumsData(data));
    getPlaylist().then((data) => setPlaylistData(data));
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Edgify</title>
        <meta name="description" content="Edgify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>edgify</h1>
        <InputSearch setinputSearchValue={setinputSearchValue}/>
        <div className={styles.albums_container}>
          <h2>Album</h2>
          <CardAlbum albumsData={albumsData} inputSearchValue={inputSearchValue}/>
        </div>
        <div className={styles.playlist_container}>
          <h2>Playlist</h2>
          {/* <CardAlbum playlistData={playlistData} /> */}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

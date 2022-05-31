import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CardAlbum from "../components/CardAlbum";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { getAlbum, getPlaylist } from "../utils";
import { useState } from "react";
import InputSearch from "../components/InputSearch";
import FilterButtonAlbum from "../components/FilterButtonAlbum";
import FilterButtonPlaylist from "../components/FilterButtonPlaylist";

export default function Home() {
  // const [albumsData, setAlbumsData] = useState([]);
  // const [playlistData, setPlaylistData] = useState([]);
  const [inputSearchValue, setinputSearchValue] = useState('');
  const [allData, setallData] = useState([]);

  //const [isAlbum, setisAlbum] = useState([]);

  const [isPopped, setPop] = useState(false);

  const albumFilterFunc = (isPopped) => {
    if ( isPopped ) {
      console.log("è true quindi Caso 1")
      const arr2 = allData.filter(item => item.iam === "album")
      setallData(arr2);
    } else if (isPopped === false){
      console.log("è false quindi Caso 2")
      console.log('il tuo array',allData);
      return allData;
    }

  }

  const playlistFilterFunc = () => {
    const arr2 = allData.filter(item => item.iam === "playlist")
    setallData(arr2);
}

  useEffect(() => {
    Promise.all([getAlbum(), getPlaylist()]).then((values) => 
      setallData([...values[0], ...values[1]])
    );
  }, []);



  return (
    <div className={styles.container}>
      <Head>
        <title>Edgify</title>
        <meta name="description" content="Edgify" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.navbar}>
        <Navbar />
      </div>

          

      <main className={styles.main}>
        <InputSearch setinputSearchValue={setinputSearchValue}/>

        <FilterButtonAlbum setPop={setPop} isPopped={isPopped} albumFilterFunc={albumFilterFunc} />
        <FilterButtonPlaylist playlistFilterFunc={playlistFilterFunc} />

        <div className={styles.albums_container}>
          <h2>All</h2>
          <CardAlbum allData={allData}  inputSearchValue={inputSearchValue}/>
        </div>
      </main>


      <footer className={styles.footer}>

        <p>Made with Next.JS by</p>
        
        <ul>
          <li><a target="_blank" href="https://www.linkedin.com/in/">Martina</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/">Valeria</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/">Muriel</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/">Claudio</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/">Giuseppe</a></li>
        </ul>
        
      </footer>

    </div>
  );
}

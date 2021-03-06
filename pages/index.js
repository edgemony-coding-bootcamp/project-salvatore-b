import Head from "next/head";
import styles from "../styles/Home.module.scss";
import CardAlbum from "../components/CardAlbum";
import { useEffect } from "react";
import { getAlbum, getPlaylist } from "../utils";
import { useState } from "react";
import InputSearch from "../components/InputSearch";
import FilterButtonAlbum from "../components/FilterButtonAlbum";
import FilterButtonPlaylist from "../components/FilterButtonPlaylist";
import LayoutDefault from "../components/LayoutDefault";


import { useRouter } from "next/router";



export default function Home() {

  const router = useRouter();

  const [inputSearchValue, setinputSearchValue] = useState("");
  const [allData, setallData] = useState([]);
  const [displayData, setdisplayData] = useState([]);

  const [isPoppedAlbum, setPopAlbum] = useState(true);
  const [isPoppedPlaylist, setPoppedPlaylist] = useState(true);

  const albumFilterFunc = (isPoppedAlbum) => {
    if (isPoppedAlbum) {
      const arr2 = allData.filter((item) => item.iam === "album");
      setdisplayData(arr2);
      setPoppedPlaylist(true);
    } else {
      setdisplayData(allData);
    }
  };
  const playlistFilterFunc = (isPoppedPlaylist) => {
    if (isPoppedPlaylist) {
      const arr2 = allData.filter((item) => item.iam === "playlist");
      setdisplayData(arr2);
      setPopAlbum(true);
    } else {
      setdisplayData(allData);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
    Promise.all([getAlbum(), getPlaylist()]).then((values) => {
      setallData([...values[0], ...values[1]]);
      setdisplayData([...values[0], ...values[1]]);
    
    })}


    //controllo localstorage
    if (!localStorage.getItem('token')) {
      router.push("/login")
    }
 
 // eslint-disable-next-line
  }, []);


  return (
    <>
      <Head>
        <title>SoundWave</title>
        <meta name="description" content="SoundWave" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDefault>
       

        <div className={styles.wrapper}>
          <InputSearch setinputSearchValue={setinputSearchValue} />

          <FilterButtonAlbum
            setPopAlbum={setPopAlbum}
            isPoppedAlbum={isPoppedAlbum}
            albumFilterFunc={albumFilterFunc}
          />
          <FilterButtonPlaylist
            playlistFilterFunc={playlistFilterFunc}
            setPoppedPlaylist={setPoppedPlaylist}
            isPoppedPlaylist={isPoppedPlaylist}
          />

          <div className={styles.wrapper__container}>
            <h2>All</h2>
            <CardAlbum
              allData={displayData}
              inputSearchValue={inputSearchValue}
            />
          </div>


        </div>
      </LayoutDefault>
    </>
  );
}

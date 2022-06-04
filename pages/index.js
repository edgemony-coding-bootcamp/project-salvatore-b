import Head from "next/head";
import styles from "../styles/Home.module.css";
import CardAlbum from "../components/CardAlbum";
import { useEffect } from "react";
import { getAlbum, getPlaylist } from "../utils";
import { useState } from "react";
import InputSearch from "../components/InputSearch";
import FilterButtonAlbum from "../components/FilterButtonAlbum";
import FilterButtonPlaylist from "../components/FilterButtonPlaylist";
import LayoutDefault from "../components/LayoutDefault";
import ModalSignup from "../components/ModalSignup";

export default function Home() {
  // const [albumsData, setAlbumsData] = useState([]);
  // const [playlistData, setPlaylistData] = useState([]);
  const [inputSearchValue, setinputSearchValue] = useState("");
  const [allData, setallData] = useState([]);
  const [displayData, setdisplayData] = useState([]);

  const [isPoppedAlbum, setPopAlbum] = useState(true);
  const [isPoppedPlaylist, setPoppedPlaylist] = useState(true);

  const albumFilterFunc = (isPoppedAlbum) => {
    if (isPoppedAlbum) {
      console.log("è", isPoppedAlbum, "quindi Caso 1");
      const arr2 = allData.filter((item) => item.iam === "album");
      setdisplayData(arr2);
    } else {
      setdisplayData(allData);
    }
  };

  const playlistFilterFunc = (isPoppedPlaylist) => {
    if (isPoppedPlaylist) {
      const arr2 = allData.filter((item) => item.iam === "playlist");
      setdisplayData(arr2);
    } else {
      setdisplayData(allData);
    }
  };

  useEffect(() => {
    Promise.all([getAlbum(), getPlaylist()]).then((values) => {
      setallData([...values[0], ...values[1]]);
      setdisplayData([...values[0], ...values[1]]);
    });
  }, []);

  const [viewModalSignup, setViewModalSignUp] = useState({
    visible: false,
  });

  function parloadHome() {
    console.log("sei in home bitch");
    setViewModalSignUp({
      visible: true,
    });
  }

  const [credentials, setCredentials] = useState({});
  const [token, setToken] = useState('');

  function getCredentials(inputMailValue, inputPasswordValue) {
    setCredentials({ email: inputMailValue, password: inputPasswordValue });
  }

  console.log("credenziali in home", credentials);

  useEffect(() => {

    if (credentials) {
      fetch("https://edgemony-backend.herokuapp.com/users", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(credentials),
      })
        .then((response) => response.json())
        .then((data) => setToken(data.accessToken));
    }
  }, [credentials]);

  console.log(token);
  console.log('cred', credentials);


  return (
    <>
      <Head>
        <title>SoundWave</title>
        <meta name="description" content="SoundWave" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDefault parloadHome={parloadHome} credentials={credentials}>
        <ModalSignup
          viewModalSignup={viewModalSignup}
          getCredentials={getCredentials}
        />
        <div className={styles.wrapper}>
          <div className={styles.input_wrapper_main}>
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
          </div>
          <div className={styles.albums_container}>
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

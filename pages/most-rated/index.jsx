import styles from "./styles.module.scss";
import LayoutDefault from "../../components/LayoutDefault";
import React from "react";
import CardAlbum from "../../components/CardAlbum";
import { getAlbum, getPlaylist } from "../../utils";
import { useState, useEffect } from "react";

export default function MostRated() {
    const [allData, setallData] = useState([]);

    useEffect(() => {
        Promise.all([getAlbum(), getPlaylist()]).then((values) => {

            // Array totale contenente album/playlist
            const arrAll = [...values[0], ...values[1]]

            // Array filtrato contente solo gli album/playlist con favorite a true
            const arrOnlyFavorites = arrAll.filter((el) => el.rating === 5);

            setallData(arrOnlyFavorites);
            console.log('dati',allData);

        });

    }, []);

  return (
    <>
      <LayoutDefault>
        <div className={styles.wrapper}>
            <h2>Most Rated</h2>
            {allData.length > 0 ? <CardAlbum allData={allData} inputSearchValue=""/>  : <p>No elements</p>}
        </div>
      </LayoutDefault>
    </>
  );
}










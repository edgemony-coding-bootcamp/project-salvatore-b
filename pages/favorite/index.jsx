import styles from "./styles.module.scss";
import { getAlbum, getPlaylist } from "../../utils";

import { useState, useEffect } from "react";

import CardAlbum from "../../components/CardAlbum";

import LayoutDefault from "../../components/LayoutDefault";


const Favorite = () => {

    const [allData, setallData] = useState([]);


    useEffect(() => {
        Promise.all([getAlbum(), getPlaylist()]).then((values) => {

            // Array totale contenente album/playlist
            const arrAll = [...values[0], ...values[1]]

            // Array filtrato contente solo gli album/playlist con favorite a true
            const arrOnlyFavorites = arrAll.filter((el) => el.favorite === true);

            setallData(arrOnlyFavorites);

        });

      }, []);



    return (
        <>  
        <LayoutDefault>
            <div className={styles.wrapper}>
                <h2>Favoriti:</h2>
                {allData.length > 0 ? <CardAlbum allData={allData} inputSearchValue="" /> : "" }
            </div>

        </LayoutDefault>
        </>
    )
}

export default Favorite;
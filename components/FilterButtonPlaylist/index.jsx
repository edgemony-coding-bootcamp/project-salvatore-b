import styles from "./styles.module.scss"


const FilterButtonPlaylist = ({playlistFilterFunc, setPoppedPlaylist, isPoppedPlaylist}) => {

    function booleanPlaylistValue() {
        setPoppedPlaylist(!isPoppedPlaylist);
        playlistFilterFunc(isPoppedPlaylist)
    }

    return (
        <button className={isPoppedPlaylist ? null : `${styles.selected}` } onClick={() => booleanPlaylistValue() }>
            FilterButtonPlaylist
        </button>
    )
}

export default FilterButtonPlaylist;
import styles from "./styles.module.scss"


const FilterButtonPlaylist = ({playlistFilterFunc, setPoppedPlaylist, isPoppedPlaylist}) => {

    function booleanPlaylistValue() {
        setPoppedPlaylist(!isPoppedPlaylist);
        playlistFilterFunc(isPoppedPlaylist)
    }

    const classes = [
        styles.btn,
        isPoppedPlaylist ? null : styles.selected
      ];

    return (
        <button
      className= {classes.join(' ')}
      onClick={() => booleanPlaylistValue()}
    >
      Playlist
    </button>
      
    )
}

export default FilterButtonPlaylist;
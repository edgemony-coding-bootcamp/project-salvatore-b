const FilterButtonPlaylist = ({playlistFilterFunc, setPoppedPlaylist, isPoppedPlaylist}) => {

    function booleanPlaylistValue() {
        setPoppedPlaylist(!isPoppedPlaylist);
        playlistFilterFunc(isPoppedPlaylist)
    }

    return (
        <button onClick={() => booleanPlaylistValue() }>
            FilterButtonPlaylist
        </button>
    )
}

export default FilterButtonPlaylist;
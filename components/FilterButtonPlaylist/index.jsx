const FilterButtonPlaylist = ({playlistFilterFunc}) => {


    return (
        <button onClick={() => playlistFilterFunc() }>
            FilterButtonPlaylist
        </button>
    )
}

export default FilterButtonPlaylist;
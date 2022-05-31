const FilterButtonAlbum = ({albumFilterFunc, setPop, isPopped}) => {


    return (
        <button onClick={() => albumFilterFunc(setPop(!isPopped)) }>
            FilterButtonAlbum
        </button>
    )
}

export default FilterButtonAlbum;
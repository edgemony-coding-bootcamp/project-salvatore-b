import styles from "./styles.module.scss"

const FilterButtonAlbum = ({ albumFilterFunc, setPopAlbum, isPoppedAlbum }) => {
  
  function booleanValuefunc() {
    setPopAlbum(!isPoppedAlbum)
      albumFilterFunc(isPoppedAlbum);
  }

return <button className={isPoppedAlbum ? null : `${styles.selected}` } onClick={() => booleanValuefunc() }>

FilterButtonAlbum
</button>



};

export default FilterButtonAlbum;
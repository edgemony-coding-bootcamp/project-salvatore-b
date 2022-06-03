import styles from "./styles.module.scss";

const FilterButtonAlbum = ({ albumFilterFunc, setPopAlbum, isPoppedAlbum }) => {
  function booleanValuefunc() {
    setPopAlbum(!isPoppedAlbum);
    albumFilterFunc(isPoppedAlbum);
  }

  const classes = [
    styles.btn,
    isPoppedAlbum ? null : styles.selected
  ];

  return (
    <button
      className= {classes.join(' ')}
      onClick={() => booleanValuefunc()}
    >
      album
    </button>
  );
};

export default FilterButtonAlbum;

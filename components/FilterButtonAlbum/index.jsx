const FilterButtonAlbum = ({ albumFilterFunc, setPopAlbum, isPoppedAlbum }) => {
  
  function booleanValuefunc() {
    setPopAlbum(!isPoppedAlbum)
      albumFilterFunc(isPoppedAlbum);
  }

return <button onClick={() => booleanValuefunc()}>FilterButtonAlbum</button>;
};

export default FilterButtonAlbum;
const FilterButtonAlbum = ({ albumFilterFunc, setPop, isPopped }) => {
  
  function booleanValuefunc() {
      setPop(!isPopped)
      albumFilterFunc(isPopped);
      console.log('il tuo valore nel bottone',isPopped);
  }

return <button onClick={() => booleanValuefunc()}>FilterButtonAlbum</button>;
};

export default FilterButtonAlbum;
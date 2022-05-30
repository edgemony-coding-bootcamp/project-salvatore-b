
export default function InputSearch({setinputSearchValue, inputSearchValue}) {
  return (
    <div>
        <input type="text" value={inputSearchValue} onChange={(e) => setinputSearchValue(e.target.value)} name="search_input" placeholder="cerca"/>
    </div>
  )
}

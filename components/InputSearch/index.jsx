import styles from "./styles.module.scss";
import { BiSearch } from "react-icons/bi";

export default function InputSearch({ setinputSearchValue, inputSearchValue }) {
  return (
    <div className={styles.input_container}>
      <input
        type="text"
        value={inputSearchValue}
        onChange={(e) => setinputSearchValue(e.target.value)}
        name="search_input"
        placeholder="search"
      />
      <button><BiSearch size="1.5rem"/></button>
    </div>
  );
}

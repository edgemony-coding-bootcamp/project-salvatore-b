import { Search } from "@mui/icons-material";
import styles from "./Header.module.scss";
import { useContext } from "react";
import { Context } from "../../Pages/Home";

const SearchBar = () => {
  const { setValue } = useContext(Context);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={styles.searchDiv}>
    <label>
      <input
      
        className={styles.searchInput}
        onChange={handleChange}
        type="text"
      />Cerca:
      </label>
      <Search className={styles.iconSearch} />
    </form>
  );
};

export default SearchBar;

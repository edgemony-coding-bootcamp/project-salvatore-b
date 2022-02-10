import { Search } from '@mui/icons-material';
import styles from './Header.module.scss';

const SearchBar = ({onClickSearch}) => {
    return(
<form className={styles.searchDiv} >
        <input className={styles.searchInput}
        // onChange={() => onClickSearch} 
        type="text" />
        <Search className={styles.iconSearch}/>
    </form>

    )
}

export default SearchBar;
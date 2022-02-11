import { Search } from '@mui/icons-material';
import styles from './Header.module.scss';

const SearchBar = ({cercaInput, handleCercaInput}) => {

    
    return(
<form className={styles.searchDiv} >
        <input className={styles.searchInput}
            // value={cercaInput}
            // onChange={handleCercaInput} 
            onChange={(e) => console.log(e.target.value)}
            type="text" />
        <Search className={styles.iconSearch}/>
    </form>

    )
}

export default SearchBar;
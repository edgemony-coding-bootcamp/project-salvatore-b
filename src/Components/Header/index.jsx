import {Link} from "react-router-dom";
import { Search, LocationOnOutlined } from '@mui/icons-material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import styles from "./Header.module.scss";


const Header = () => {
    return (
        <header className={styles.head}>
            <div className={styles.firstLine}>
            <div className={styles.wrapper_header_section}>
                <Link to="/">
                    <img className={styles.imgLogoA} src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png" alt="" />
                </Link>
            </div>
                <a href="/">
            <div className={styles.wrapper_header_section}>
                <div className={styles.positionDiv}><LocationOnOutlined className={styles.positionOn}/>
                <div>
                <span>Ciao,</span>
                <br/> Scegli il tuo indirizzo</div>
                </div>
            </div>
                </a>
                <div className={styles.searchDiv}>
                <input className={styles.searchInput}  type="text"/>
                <Search className={styles.iconSearch}/>
                </div>
                    <Link to="/login">
                <div className={styles.wrapper_header_section}>
                    <span>Ciao, Accedi</span> <br/> Account e liste 
                    <ArrowDropDownIcon className={styles.arrowDropDown} fontSize="small"/>
                </div>
                    </Link>
                    <a href="/">
                <div className={styles.wrapper_header_section}>
                    <span>Resi</span> <br/> e ordini
                </div>
                    </a>
                <div className={styles.wrapper_header_section}>
                    <a href="/">
                    <IconButton aria-label="cart">
                        <Badge badgeContent={1} className={styles.cartIcon}>
                            <ShoppingBagOutlinedIcon fontSize="large" />
                        </Badge>
                    </IconButton>
                    Carrello
                     </a>
                </div>
            </div>
            <div className={styles.secondLine}>
                <a href="/">Amazon Choice</a>
                <a href="/">Libri</a>
                <a href="/">Eletronica</a>
                <a href="/">Bellezza e salute</a>
                <a href="/">Gaming</a>
                <a href="/">Film e TV</a>
            </div>
        </header>
    )


};

export default Header;

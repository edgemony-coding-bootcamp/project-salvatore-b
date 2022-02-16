import { Link } from "react-router-dom";
import { LocationOnOutlined } from '@mui/icons-material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchBar from './searchBar';
import styles from "./Header.module.scss";
import { useStateValue } from "../../Libs/StateProvider";

const Header = ({handleSidebar}) => {
    const [{ basket }] = useStateValue();
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
                        <div className={styles.positionDiv}><LocationOnOutlined className={styles.positionOn} />
                            <div>
                                <span>Ciao,</span>
                                <br /> Scegli il tuo indirizzo</div>
                        </div>
                    </div>
                </a>

                <SearchBar />


                <Link to="/login">
                    <div className={styles.wrapper_header_section}>
                        <span>Ciao, Accedi</span> <br /> Account e liste
                        <ArrowDropDownIcon className={styles.arrowDropDown} fontSize="small" />
                    </div>
                </Link>
                <a href="/">
                    <div className={styles.wrapper_header_section}>
                        <span>Resi</span> <br /> e ordini
                    </div>
                </a>
                <Link to="/carrello">
                    <div className={styles.wrapper_header_section} onMouseOver={handleSidebar}>
                        <IconButton aria-label="cart">
                            <Badge badgeContent={basket?.length} className={styles.cartIcon}>
                                <ShoppingBagOutlinedIcon fontSize="large" />
                            </Badge>
                        </IconButton>
                        Carrello
                    </div>
                </Link>
            </div>
            <div className={styles.secondLine}>
                <div className={styles.wrapper_header_section}><Link to="/">Amazon Choice</Link></div>
                <div className={styles.wrapper_header_section}><Link to="/libri">Libri</Link></div>
                <div className={styles.wrapper_header_section}><Link to="/elettronica">Elettronica</Link></div>
                <div className={styles.wrapper_header_section}><Link to="/beauty">Bellezza e salute</Link></div>
                <div className={styles.wrapper_header_section}><Link to="/gaming">Gaming</Link></div>
                <div className={styles.wrapper_header_section}><Link to="/cucina">Cucina</Link></div>
            </div>
        </header>
    )


};

export default Header;
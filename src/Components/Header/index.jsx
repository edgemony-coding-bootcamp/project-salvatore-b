import {Link} from "react-router-dom";
import { LocationOnOutlined } from '@mui/icons-material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchBar from './searchBar';
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";




const Header = () => {
    // const [cercaInput, setCercaInput] = useState("");
    // const [product, setProduct] = useState(prodotto);
    // const handleCercaInput = (e) => setCercaInput(e.target.value);

    // useEffect(() => {
    //     const search = prodotto.filter(
    //         (prod) => 
    //         prod.toLowerCase().included(cercaInput.toLowerCase())
    //     )

    //     setProduct(search)
    // }, [cercaInput])

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
                
                <SearchBar
            // cercaInput={cercaInput}
            // handleCercaInput={handleCercaInput}
             /> 

               
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
            <div className={styles.wrapper_header_section}><a href="/">Amazon Choice</a></div>
            <div className={styles.wrapper_header_section}><a href="/">Libri</a></div>
                <div className={styles.wrapper_header_section}><a href="/">Eletronica</a></div>
                <div className={styles.wrapper_header_section}><a href="/">Bellezza e salute</a></div>
                <div className={styles.wrapper_header_section}><a href="/">Gaming</a></div>
                <div className={styles.wrapper_header_section}><a href="/">Film e TV</a></div>
            </div>
        </header>
    )


};

export default Header;
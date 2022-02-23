import { Link } from "react-router-dom";
import { LocationOnOutlined } from "@mui/icons-material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import SearchBar from "./searchBar";
import styles from "./Header.module.scss";
import { useStateValue } from "../../Libs/StateProvider";
import { getAuth } from "firebase/auth";

const Header = ({ handleSidebar }) => {
  const auth = getAuth();
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  const getTotalItems = () => {
    return basket.reduce(
      (total, currentItem) => (total += currentItem.count),
      0
    );
  };

  return (
    <header className={styles.head}>
      <div className={styles.firstLine}>
        <div className={styles.wrapper_header_section}>
          <Link to="/">
            <img
              className={styles.imgLogoA}
              src="https://firebasestorage.googleapis.com/v0/b/clone-8164f.appspot.com/o/snorlaxon%20B-N.png?alt=media&token=7c9602fd-5ca5-443a-a307-6ee321faec3d"
              alt="snorlaxUp"
              loading="lazy"
            />
          </Link>
        </div>

          <div className={styles.wrapper_header_section}>
            <div className={styles.positionDiv} >
              <LocationOnOutlined className={styles.positionOn} />
            <div className={styles.ship_in_italy}>
                <span>Spediamo</span>
                <br />
                In Italia!
              </div>
            </div>
          </div>

        <SearchBar />

        <Link to={!user && "/login"}>
          <div onClick={login} className={styles.wrapper_header_section}>
            <div className={styles.login_section}>
              <span className={styles.hellouser}>
                Ciao,{" "}
                {user
                  ? user?.email.substring(0, user?.email.indexOf("@"))
                  : "Visitatore"}
              </span>{" "}
              <br />
              {user ? "Disconnettiti" : "Accedi adesso"}
              {/* <ArrowDropDownIcon
                className={styles.arrowDropDown}
                fontSize="small"
              /> */}
            </div>
          </div>
        </Link>
        <Link to={user ? "/profilo" : "/login"}>
          <div className={styles.wrapper_header_section}>
            <span>Il mio profilo</span> <br /> Snorlaxon
            <ArrowDropDownIcon
              className={styles.arrowDropDown}
              fontSize="small"
            />
          </div>
        </Link>
        <Link to="/carrello">
          <div
            className={styles.wrapper_header_section}
            onMouseOver={handleSidebar}
          >
            <IconButton aria-label="cart">
              <Badge badgeContent={getTotalItems()} className={styles.cartIcon}>
                <ShoppingBagOutlinedIcon fontSize="large" />
              </Badge>
            </IconButton>
            Carrello
          </div>
        </Link>
      </div>
      <div className={styles.secondLine}>
        <div className={styles.wrapper_header_section}>
          <Link to="/">Choice</Link>
        </div>
        <div className={styles.wrapper_header_section}>
          <Link to="/libri">Libri</Link>
        </div>
        <div className={styles.wrapper_header_section}>
          <Link to="/elettronica">Elettronica</Link>
        </div>
        <div className={styles.wrapper_header_section}>
          <Link to="/beauty">Bellezza e salute</Link>
        </div>
        <div className={styles.wrapper_header_section}>
          <Link to="/gaming">Gaming</Link>
        </div>
        <div className={styles.wrapper_header_section}>
          <Link to="/cucina">Cucina</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

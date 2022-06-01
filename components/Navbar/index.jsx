import Link from "next/link";
import { AiOutlineHome, AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.Navbar}>
      <Link href="/">
        <a>
          <Image src={logo} alt="Edgify" width="130px" height="42px" />
        </a>
      </Link>

      <ul>
        <li>
          <Link href="/">
            <a
              className={router.pathname == "/" ? `${styles.activebutton}` : ""}
            >
              {router.pathname == "/" ? <AiFillHome /> : <AiOutlineHome />} Home{" "}
            </a>
          </Link>
        </li>

        <li>
          <Link href="/search">
            <a>
              {" "}
              <AiOutlineSearch />
              Search
            </a>
          </Link>
        </li>

        <li>
          <Link href="/favorite">
            <a
              className={
                router.pathname == "/favorite" ? `${styles.activebutton}` : ""
              }
            >
              {router.pathname == "/favorite" ? (
                <MdFavorite />
              ) : (
                <MdFavoriteBorder />
              )}
              Favorite
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

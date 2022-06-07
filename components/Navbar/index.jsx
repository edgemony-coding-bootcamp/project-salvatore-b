import Link from "next/link";
import {
  AiOutlineHome,
  AiFillHome,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../public/logo_soundwave.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__logo}>
        <Link href="/">
          <a>
            <Image width={210} height={43} src={logo} alt="SoundWave" />
          </a>
        </Link>
      </div>

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
          <Link href="/most-rated">
            <a
              className={
                router.pathname == "/most-rated" ? `${styles.activebutton}` : ""
              }
            >
              {router.pathname == "/most-rated" ? (
                <AiFillStar />
              ) : (
                <AiOutlineStar />
              )}
              Most Rated
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
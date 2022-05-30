import Link from "next/link";
import { AiOutlineHome,AiOutlineSearch} from 'react-icons/ai';
import styles from "./styles.module.scss"

const Navbar = () => {
  return (
    <div className={styles.Navbar}>

    <h1>Edgify</h1>

      <ul>

        <li>
          <Link href="/">
            <a><AiOutlineHome />Homepage</a>
          </Link>
        </li>

        <li>
          <Link href="/search">
            <a><AiOutlineSearch />Search</a>
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default Navbar;

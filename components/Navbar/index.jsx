import Link from "next/link";
import { AiOutlineHome,AiOutlineSearch} from 'react-icons/ai';
import styles from "./styles.module.scss"
import Image from 'next/image';
import logo from "../../public/logo.png"

const Navbar = () => {
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
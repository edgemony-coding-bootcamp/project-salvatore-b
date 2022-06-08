import { HiOutlineUserCircle } from "react-icons/hi";
import styles from "./styles.module.scss";

export default function UserLogged({ parloaLayout }) {
  function userSignup() {
    parloaLayout();
  }

  

  return (
    <button className={styles.user_log} onClick={() => userSignup()}>
      <div className={styles.img_user}>
        <HiOutlineUserCircle />
      </div>
      <div className={styles.info_user}>You</div>
    </button>
  );
}

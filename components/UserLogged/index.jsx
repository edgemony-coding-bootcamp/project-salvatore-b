import { HiOutlineUserCircle } from "react-icons/hi";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function UserLogged({parloaLayout}) {
    const [isPopped, setPopped] = useState(false);

    function userSignup(){
        setPopped(true);
        console.log('visualizza la modale');
        parloaLayout()
    }

  return (
    
        <button className={styles.user_log} onClick={() => userSignup()}>
          <div className={styles.img_user}>
            <HiOutlineUserCircle />
          </div>
          <div className={styles.info_user}>Sign up</div>
        </button>

  );
}

import { useState, useEffect } from "react";

import styles from "./styles.module.scss";




const InputLogin = ({setCredentials}) => {

    const [inputMailValue, setInputMailValue] = useState("");
    const [inputPasswordValue, setInputPasswordValue] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();

        setCredentials({
            email: inputMailValue,
            password: inputPasswordValue
        })

        // if (localStorage.getItem('token')) {
        //     window.location.href = "/";
        // } 

    }

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         window.location.href = "/";
    //     }
    // },[])



    return (
    <form onSubmit={onSubmit}  className={styles.form}>
        <input
          type="email"
          id="email"
          placeholder="user@mail.com"
          value={inputMailValue}
          onChange={(e) => setInputMailValue(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          required
          value={inputPasswordValue}
          onChange={(e) => setInputPasswordValue(e.target.value)}
        />
        <input type="submit" value="Login" />
    </form>
    )


}

export default InputLogin;
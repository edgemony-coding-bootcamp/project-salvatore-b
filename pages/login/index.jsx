import { useState, useEffect } from "react";
import Image from "next/image";
import imgLogin from "../../public/img_login.png";
import logo from "../../public/logo_soundwave.png";

import InputLogin from "../../components/InputLogin";

import styles from "./styles.module.scss";

import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("qui credentials ===>>", credentials);
    if (credentials.email && credentials.password) {
      fetch("https://edgemony-backend.herokuapp.com/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(credentials),
      })
        .then((response) => response.json())
        .then((data) => setToken(data.accessToken));
    }

    // if (localStorage.getItem('token')) {
    //     window.location.href = "/";
    // }
  }, [credentials]);

  useEffect(() => {
    localStorage.setItem("token", token);

    if (localStorage.getItem("token")) {
      // window.location.href = "/";
      router.push("/");
    }
  }, [token]);

  return (
    <div className={styles.loginpage}>
      <div className={styles.img_container}>
        <Image
          src={imgLogin}
          width={1000}
          height={1000}
          alt="ragazza soundwave"
          layout="responsive"
        />
      </div>
      <div className={styles.allinfo}>
        <div className={styles.logo_container}>
          <Image
            className={styles.logo}
            width={210}
            height={43}
            src={logo}
            alt="SoundWave"
          />
        </div>
        <h1>Welcome!</h1>
        <p>Please enter your details</p>
        <InputLogin setCredentials={setCredentials} />
      </div>
    </div>
  );
};

export default Login;

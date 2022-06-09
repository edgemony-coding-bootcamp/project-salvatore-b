import { useState, useEffect} from "react";
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

    if (credentials.email && credentials.password) {
      fetch("https://edgemony-backend.herokuapp.com/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(credentials),
      })
        .then((response) => {
          if (response.ok) { 
            return response.json();
           }
           return Promise.reject(response); 
        })
        .then((data, status) => {
            setToken(data.accessToken);
            localStorage.setItem("userId", data.user.id)
          }
        )
        .catch(error => alert('Invalid credentials'));
    }
  // eslint-disable-next-line
  }, [credentials]);

  useEffect(() => {


    localStorage.setItem("token", token);

    if (localStorage.getItem("token")) {
      router.push("/");
    }
  // eslint-disable-next-line
  }, [token]);

  return (
    <div className={styles.loginpage}>
      <div className={styles.img_container}>
        
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
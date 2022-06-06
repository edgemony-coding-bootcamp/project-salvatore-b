import { useState,useEffect } from "react";


import InputLogin from "../../components/InputLogin";

import styles from "./styles.module.scss";

import { useRouter } from "next/router";

const Login = () => {

    const router = useRouter();

    const [credentials,setCredentials] = useState({})
    const [token,setToken] = useState("");
    

    useEffect(() => {

        console.log("qui credentials ===>>", credentials)
        if (credentials.email && credentials.password) {
            fetch("https://edgemony-backend.herokuapp.com/login", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(credentials),
            })
              .then((response) => response.json())
              .then((data) => setToken(data.accessToken))
     
        }

        // if (localStorage.getItem('token')) {
        //     window.location.href = "/";
        // }

    }, [credentials])



    useEffect(() => {

        localStorage.setItem("token", token);

        if (localStorage.getItem('token')) {
            // window.location.href = "/";
            router.push("/")
        }
    },[token])






    return (
        <InputLogin setCredentials={setCredentials} />
    )
}


export default Login;
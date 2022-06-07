import { useState } from "react";
import styles from "./styles.module.scss";

const InputLogin = ({ setCredentials }) => {
  const [inputMailValue, setInputMailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setCredentials({
      email: inputMailValue,
      password: inputPasswordValue,
    });

  };

  return (

      <form onSubmit={onSubmit} className={styles.form}>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="user@mail.com"
          value={inputMailValue}
          onChange={(e) => setInputMailValue(e.target.value)}
          required
        />
        <label for="password">Password</label>
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
  );
};

export default InputLogin;
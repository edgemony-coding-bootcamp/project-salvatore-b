import styles from "./styles.module.scss";

export default function ModalSignup({ viewModalSignup }) {
  const visible = viewModalSignup.visible || false;

  const classes = [styles.ModalSignup, visible ? styles.visible : ""];

  return (
    <div className={classes.join(" ")}>
      <div className={styles.modal}>
          <h2>Sign Up</h2>
        <form className={styles.form}>
          <input type="email" id="email" placeholder="email" required />
          <input
            type="password"
            id="password"
            placeholder="password"
            required
          />
          <input type="submit" value="Create Account"/>
        </form>
      </div>
    </div>
  );
}

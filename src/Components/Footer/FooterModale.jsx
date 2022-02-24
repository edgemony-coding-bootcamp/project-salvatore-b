import styles from "./FooterModale.module.scss";
import team from "../Team/index.json";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const FooterModal = ({ closeFootModal }) => {
  const [snorlax] = useState(team);

  return (
    <div className={styles.footerModal}>
      <div className={styles.headerMod}>
        <div className={styles.titleMod}>
          <h4>Made with 💖 by Snorlax Team</h4>
        </div>
      </div>

      <form className={styles.membri}>
        {snorlax.map((person) => (
          <section className={styles.membro}>
            <div>
              <img
                className={styles.membroImg}
                src={person.photo}
                alt="membro-team"
              />
            </div>
            <div>
              <p className={styles.nomeMembro}>{person.name}</p>
            </div>
            <div className={styles.containerDescMod}>
              <p>{person.sector}</p>
              <div className={styles.containerLinks}>
                <div className={styles.linkLinkedin}>
                  <a href={person.linkedin} target="_blank" rel="noreferrer">
                    <img
                      className={styles.imgLinkedin}
                      src={person.logoLinkedin}
                      alt="linkedin"
                    />
                  </a>
                </div>
                <div className={styles.GitHub}>
                  <a href={person.github} target="_blank" rel="noreferrer">
                    <img
                      className={styles.imgGitHub}
                      src={person.logoGithub}
                      alt="github"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </form>
      <div className={styles.closeMod}>
        <CloseIcon onClick={closeFootModal} />
      </div>
    </div>
  );
};

export default FooterModal;

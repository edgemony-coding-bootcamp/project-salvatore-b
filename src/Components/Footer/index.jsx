import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = ({ handleSnorlaxModal }) => {
  return (
    <div className={styles.FooterWrapper}>
      <div className={styles.NavFooter}>
        <button
          onClick={() => window.scrollTo(0, 0)}
          className={styles.BackToTop}
        >
          Torna su
        </button>
      </div>
      <div className={styles.Footer}>
        <ul>
          <li>
            <h4>Per conoscerci meglio</h4>
          </li>
          <li>Opportunità di lavoro</li>
          <li>Sostenibilità</li>
          <li>AGCM - Impegni Amazon Procedimento PS 11716</li>
          <li>Amazon Science</li>
        </ul>

        <ul>
          <li>
            <h4>Guadagna con Amazon</h4>
          </li>
          <li>Vendi su Amazon</li>
          <li>Vendi su Amazon Business</li>
          <li>Vendi su Amazon Handmade</li>
          <li>Diventa affiliato</li>
          <li>Logistica Amazon</li>
          <li>Pubblica con noi da indipendente</li>
          <li>Promuovi i tuoi prodotti</li>
          <li>Ospita un hun Amazon</li>
          <li>Scopri di più su Make Money with Us</li>
        </ul>

        <ul>
          <li>
            <h4>Metodi di pagamento Amazon </h4>
          </li>
          <li> Metodi di pagamento</li>
          <li>Convertitore di Valuta Amazon</li>
          <li>Buoni Regalo</li>
          <li>Ricarica online</li>
          <li>Ricarica in cassa</li>
        </ul>

        <ul>
          <li>
            <h4>Bisogno di aiuto?</h4>
          </li>
          <li>Visualizza o traccia un ordine</li>
          <li>Costi e modalità di spedizione</li>
          <li>Amazon Prime</li>
          <li>Restituisci o sostituisci articoli</li>
          <li>Riciclo</li>
          <li>I miei contenuti e dispositivi</li>
          <li>App Amazon Mobile </li>
          <li>Amazon Assistant</li>
          <li>Servizio Clienti</li>
          <li>IVA e fatturazione</li>
          <li>Garanzia legale</li>
        </ul>
      </div>

      <div className={styles.logo}>
        <Link to="/">
          <img
            className={styles.imgLogoA}
            src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
            alt=""
          />
        </Link>
      </div>

      <div className={styles.Policy}>
        <p>Condizioni generali di uso e vendita </p>
        <p>Informativa sulla privacy</p>
        <p>Area Legale</p>
        <p>Cookie</p>
        <p>Pubblicità definita in base agli interessi</p>
        <div className={styles.ModalTeam}>
          <p>
            Created by © 2022{" "}
            <span
              className={styles.Snorlax}
              placeholder="Click Me"
              onClick={handleSnorlaxModal}
            >
              {" "}
              Snorlax Team
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

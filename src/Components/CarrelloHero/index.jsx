import styles from "./CarrelloHero.module.scss";

const CarrelloHero = () => {
  return (
    <div className={styles.imgCarrello}>
      <img
        src={
          "https://www.ilgeniodipalermo.com/images/template/carrello-vuoto.gif"
        }
        alt=""
      />
    </div>
  );
};

export default CarrelloHero;

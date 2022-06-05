import styles from "./styles.module.scss";
import Image from "next/image";

import Link from "next/link";

export default function CardAlbum({ allData, inputSearchValue }) {
  return (

    <div className={styles.all}>
      {allData &&
        allData
          ?.filter(
            (el) =>
              el?.title
                .toLowerCase()
                .trim()
                .includes(inputSearchValue.toLowerCase().trim()) ||
              el?.genres
                .toString()
                .toLowerCase()
                .trim()
                .includes(inputSearchValue.toLowerCase().trim())  
          )

          .map((el) => (
            <div className={styles.CardAlbum} key={el.id}>
              
              <Link href= {el.iam === 'album' ? `album/${el.id}` : `playlist/${el.id}`}  key={el.id}>
                <a>
                  <div className={styles.img_container}>
                    <Image src={el?.cover} alt={el?.title} width={140}
                        height={140}
                        layout="responsive"/>
                  </div>
                  <div className={styles.info_container}>
                    <h2>{el?.title}</h2>
                    {/* <p className={styles.year}>{el?.year}</p> */}
                  </div>
                </a>
              </Link>
            </div>
          ))}
    </div>
  );
}

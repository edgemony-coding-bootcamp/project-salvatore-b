import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function MostLiked({ allData }) {
  console.log("i tuoi elementi in mostliked", allData);
  return (
    <div>
      <ul className={styles.mostlikedList}>
        {allData &&
          allData
            .filter((el) => el?.rating === 5)
            .map((el) => (
              <Link
                href={
                  el.iam === "album" ? `album/${el.id}` : `playlist/${el.id}`
                }
                key={el.id}
              >
                <a>
                  <li className={styles.mostlikedEl} key={el.id}>
                    <div className={styles.img_container}>
                      <Image
                        src={el.cover}
                        alt={el.title}
                        width={60}
                        height={60}
                        layout="responsive"
                      />
                    </div>
                    <div className={styles.title}>{el.title}</div>
                    <div className={styles.iam}>{el.iam}</div>
                  </li>
                </a>
              </Link>
            ))}
      </ul>
    </div>
  );
}

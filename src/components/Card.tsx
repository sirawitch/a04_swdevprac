import Image from "next/image";
import styles from "./card.module.css";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <div className={styles.card}>
      {/* Image Section */}
      <div className={styles.imageContainer}>
        <Image
          src={imgSrc}
          alt={venueName}
          width={300}
          height={200}
          className={styles.image}
        />
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <h3 className={styles.title}>{venueName}</h3>
      </div>
    </div>
  );
}

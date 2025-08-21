import Image from "next/image";
import styles from "./banner.module.css";

interface BannerProps {
  imageUrl: string;
  height?: number;
}

export default function Banner({imageUrl }: BannerProps) {
  return (
    // ส่วนนี้ไม่จำเป็นต้องเปลี่ยน
    <div className={styles.banner}>
      {/* Image Layer */}
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt="Banner" width={1000} height={1000} priority />
      </div>

      {/* Text Layer */}
      <div className={styles.textOverlay}>
        <h1>{"where every event finds its venue"}</h1>
        <p>{"fell free to join our event"}</p>
      </div>
    </div>
  );
}

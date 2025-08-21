import Banner from "../components/Banner";
import Card from "../components/Card";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div>
      <Banner imageUrl="/banner.jpg" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
        <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
        <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
      </div>
    </div>
  );
}

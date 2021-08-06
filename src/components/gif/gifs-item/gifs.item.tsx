import styles from "./gifs-item.module.css";

interface GifsItemProps {
  gifUrl: string;
}

export function GifsItem({ gifUrl }: GifsItemProps) {
  return (
    <div className={styles.gifCard}>
      <div className="card border-0">
        <img src={gifUrl} className="card-img" alt="..." />
        <div className="card-img-overlay"></div>
      </div>
    </div>
  );
}

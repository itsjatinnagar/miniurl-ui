import analytics from "../images/analytics.svg";
import shortener from "../images/shortener.svg";
import qr from "../images/qr.svg";
import styles from "../styles/FeatureList.module.css";
import { PrimaryCard } from "../components/Card";

export default function FeatureList() {
  return (
    <div className={styles.list}>
      <FeatureCard
        src={shortener}
        title="URL Shortener"
        content="MiniUrl is a URL Shortener and Link Management Platform with a lot of features that will help you handle all your links in an intuitive way and reveal the potential of your links."
      />
      <FeatureCard
        src={analytics}
        title="Link Analytics"
        content="MiniUrl is an advanced Link Analytics platform that tracks clicks on short links and measures the effectiveness of clicks. Extensive statistics of clicks on short links."
      />
      <FeatureCard
        src={qr}
        title="QR Codes"
        content="Generate QR codes and customize them according to your style and manage their redirection so that QR codes reflect your brand and allow you to grow your business."
      />
    </div>
  );
}

function FeatureCard({ src, title, content }) {
  return (
    <PrimaryCard className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <img src={src} alt="miniurl" />
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.content}>{content}</p>
    </PrimaryCard>
  );
}

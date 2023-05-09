import Button from "../components/Button";
import styled from "../styles/Components.module.css";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={`${styled.container} ${styles.header}`}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>More than just shorter links</h1>
        <p className={styles.description}>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className={styles.spacer}>
          <Button size="large" theme="primary-light" type="button">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}

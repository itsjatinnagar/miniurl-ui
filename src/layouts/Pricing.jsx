import Button from "../components/Button";
import styled from "../styles/Components.module.css";
import styles from "../styles/Pricing.module.css";

export default function Pricing() {
  if (true) return;

  return (
    <section className={`${styled.container} ${styles.section}`}>
      <div className={styles.card}>
        <h2 className={styles.title}>Boost your links for free</h2>
        <Button size="large" theme="secondary-dark" type="button">
          Get Started
        </Button>
      </div>
    </section>
  );
}

import styles from "../styles/Card.module.css";

export function PrimaryCard({ className, children }) {
  return <div className={`${styles.primary} ${className}`}>{children}</div>;
}

export function SecondaryCard({ className, children }) {
  return <div className={`${styles.secondary} ${className}`}>{children}</div>;
}

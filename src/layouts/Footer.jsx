import styles from "../styles/Footer.module.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Copyright &copy; {currentYear} MiniUrl</p>
    </footer>
  );
}

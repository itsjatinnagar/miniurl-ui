import Button from "../components/Button";
import logo from "../images/logo.svg";
import styled from "../styles/Components.module.css";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${styled.container} ${styles.navbar}`}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="miniurl" />
      </a>
      {true ? <LogoutButton /> : <LoginButton />}
    </nav>
  );
}

function LoginButton() {
  return (
    <Button size="small" theme="primary-light" type="button">
      Login/signup
    </Button>
  );
}

function LogoutButton() {
  return (
    <a href="/logout">
      <Button size="small" theme="logout-light" type="button">
        Logout
      </Button>
    </a>
  );
}

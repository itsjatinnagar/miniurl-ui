import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import logo from "../images/logo.svg";
import styled from "../styles/Components.module.css";
import styles from "../styles/Navbar.module.css";
import { openModal } from "../services/reducers/modalSlice";

export default function Navbar() {
  const user = useSelector((state) => state.user.user);

  return (
    <nav className={`${styled.container} ${styles.navbar}`}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="miniurl" />
      </a>
      {user ? <LogoutButton /> : <LoginButton />}
    </nav>
  );
}

function LoginButton() {
  const dispatch = useDispatch();

  return (
    <Button
      size="small"
      theme="primary-light"
      type="button"
      clickHandler={() => dispatch(openModal())}
    >
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

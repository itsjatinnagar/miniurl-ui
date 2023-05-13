import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import styled from "../styles/Components.module.css";
import styles from "../styles/Pricing.module.css";
import { openModal } from "../services/reducers/modalSlice";

export default function Pricing() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  if (user) return;

  return (
    <section className={`${styled.container} ${styles.section}`}>
      <div className={styles.card}>
        <h2 className={styles.title}>Boost your links for free</h2>
        <Button
          size="large"
          theme="secondary-dark"
          type="button"
          clickHandler={() => dispatch(openModal())}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}

import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import styled from "../styles/Components.module.css";
import styles from "../styles/Header.module.css";
import { openModal } from "../services/reducers/modalSlice";
import { useState } from "react";
import { createShorten } from "../services/reducers/shortenSlice";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  return (
    <header className={`${styled.container} ${styles.header}`}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>More than just shorter links</h1>
        <p className={styles.description}>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className={styles.spacer}>
          {user ? (
            <ShortenForm />
          ) : (
            <Button
              size="large"
              theme="primary-light"
              type="button"
              clickHandler={() => dispatch(openModal())}
            >
              Get Started
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

function ShortenForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const loading = useSelector((state) => state.shorten.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createShorten(value));
  };

  return (
    <div className={styles.card}>
      <Form label="Shorten It!" loading={loading} submitHandler={handleSubmit}>
        <Input
          changeHandler={setValue}
          id="link"
          maxLength="2048"
          name="link"
          placeholder="https://very-very-long-url.com/"
          type="url"
          value={value}
        />
      </Form>
    </div>
  );
}

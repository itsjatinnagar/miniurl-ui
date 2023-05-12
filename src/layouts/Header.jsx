import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
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
          {true ? (
            <ShortenForm />
          ) : (
            <Button size="large" theme="primary-light" type="button">
              Get Started
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

function ShortenForm() {
  return (
    <div className={styles.card}>
      <Form label="Shorten It!">
        <Input
          id="link"
          maxLength="2048"
          name="link"
          placeholder="https://very-very-long-url.com/"
          type="url"
        />
      </Form>
    </div>
  );
}

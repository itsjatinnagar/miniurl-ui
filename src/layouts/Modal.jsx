import Button from "../components/Button";
import styled from "../styles/Components.module.css";
import styles from "../styles/Modal.module.css";
import close from "../images/icon-close.svg";
import Form from "../components/Form";
import Input from "../components/Input";

export default function Modal() {
  return (
    <div className={styled.overlay}>
      <div className={styles.modal}>
        <div className={styles.actions}>
          <Button>
            <img src={close} alt="miniurl" />
          </Button>
        </div>

        {true && <LoginSection />}
        {false && <VerifySection />}
      </div>
    </div>
  );
}

function LoginSection() {
  return (
    <Section
      title="Login to MiniUrl"
      description="We will send you a 6-digit code to your entered email address"
    >
      <Form label="Continue" className={styles.form}>
        <label htmlFor="email">Enter E-mail address</label>
        <Input
          id="email"
          name="email"
          placeholder="john.doe@gmail.com"
          type="email"
        />
      </Form>
    </Section>
  );
}

function VerifySection() {
  return (
    <Section
      title="Verify Your Identity"
      description="We've sent an email with your code to john.doe@gmail.com"
    >
      <Form label="Verify and Login">
        <label htmlFor="code">Enter the code</label>
        <Input
          inputMode="numeric"
          id="code"
          name="code"
          minLength="6"
          maxLength="6"
          placeholder="000000"
          type="text"
        />
      </Form>
    </Section>
  );
}

function Section({ title, description, children }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.wrapper}>{children}</div>
    </>
  );
}

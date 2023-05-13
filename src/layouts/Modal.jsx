import Button from "../components/Button";
import styled from "../styles/Components.module.css";
import styles from "../styles/Modal.module.css";
import close from "../images/icon-close.svg";
import Form from "../components/Form";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { ModalViewEnum, closeModal } from "../services/reducers/modalSlice";
import { useState } from "react";
import { sendCode, verifyCode } from "../services/reducers/authSlice";

export default function Modal() {
  const dispatch = useDispatch();
  const modalView = useSelector((state) => state.modal.modalView);

  return (
    <div className={styled.overlay}>
      <div className={styles.modal}>
        <div className={styles.actions}>
          <Button clickHandler={() => dispatch(closeModal())}>
            <img src={close} alt="miniurl" />
          </Button>
        </div>

        {modalView === ModalViewEnum.LOGIN && <LoginSection />}
        {modalView === ModalViewEnum.VERIFY && <VerifySection />}
      </div>
    </div>
  );
}

function LoginSection() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendCode(value));
  };

  return (
    <Section
      title="Login to MiniUrl"
      description="We will send you a 6-digit code to your entered email address"
    >
      <Form
        label="Continue"
        loading={loading}
        className={styles.form}
        submitHandler={handleSubmit}
      >
        <label htmlFor="email">Enter E-mail address</label>
        <Input
          changeHandler={setValue}
          id="email"
          name="email"
          placeholder="john.doe@gmail.com"
          type="email"
          value={value}
        />
      </Form>
    </Section>
  );
}

function VerifySection() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const { email, loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyCode(value)).then((value) => {
      if (value.payload.type === "success") {
        window.location.reload();
      }
    });
  };

  return (
    <Section
      title="Verify Your Identity"
      description={`We've sent an email with your code to ${email}`}
    >
      <Form
        label="Verify and Login"
        loading={loading}
        className={styles.form}
        submitHandler={handleSubmit}
      >
        <label htmlFor="code">Enter the code</label>
        <Input
          changeHandler={setValue}
          inputMode="numeric"
          id="code"
          name="code"
          minLength="6"
          maxLength="6"
          placeholder="000000"
          type="text"
          value={value}
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

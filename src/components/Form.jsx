import Button from "./Button";
import { SecondaryCard } from "./Card";
import styles from "../styles/Form.module.css";

export default function Form({
  children,
  className,
  label,
  loading,
  submitHandler,
}) {
  return (
    <SecondaryCard>
      <form onSubmit={submitHandler} className={`${styles.form} ${className}`}>
        {children}
        <Button
          size="medium"
          theme="primary-light"
          type="submit"
          loading={loading}
        >
          {label}
        </Button>
      </form>
    </SecondaryCard>
  );
}

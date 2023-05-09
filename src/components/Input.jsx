import styles from "../styles/Input.module.css";

export default function Input({
  changeHandler,
  id,
  inputMode,
  maxLength,
  minLength,
  name,
  placeholder,
  type,
  value,
}) {
  return (
    <input
      autoComplete="off"
      className={styles.input}
      id={id}
      inputMode={inputMode}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      onChange={changeHandler}
      placeholder={placeholder}
      type={type}
      value={value}
      required
    />
  );
}

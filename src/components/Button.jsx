import styled from "../styles/Components.module.css";
import {
  getButtonSizeClassName,
  getButtonThemeClassName,
  getLabelSizeClassName,
  getLabelThemeClassName,
} from "../utils/button";

export default function Button({
  children,
  clickHandler,
  loading,
  size,
  theme,
  type,
}) {
  const buttonThemeClassName = getButtonThemeClassName(theme);
  const buttonSizeClassName = getButtonSizeClassName(size);
  const labelThemeClassName = getLabelThemeClassName(theme);
  const labelSizeClassName = getLabelSizeClassName(size);

  return (
    <button
      type={type}
      className={`${styled.button} ${buttonThemeClassName} ${buttonSizeClassName}`}
      disabled={loading}
      onClick={clickHandler}
    >
      {loading ? (
        <span className={styled.loader}></span>
      ) : typeof children === "string" ? (
        <span className={`${labelThemeClassName} ${labelSizeClassName}`}>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}

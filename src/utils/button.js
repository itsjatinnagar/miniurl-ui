import styles from "../styles/Button.module.css";

export const getButtonThemeClassName = (theme) => {
  switch (theme) {
    case "primary-light":
      return styles.btn_primary_light;
    case "secondary-light":
      return styles.btn_secondary_light;
    case "secondary-dark":
      return styles.btn_secondary_dark;
    case "logout-light":
      return styles.btn_logout_light;
    default:
      return;
  }
};

export const getButtonSizeClassName = (size) => {
  switch (size) {
    case "small":
      return styles.btn_sm;
    case "medium":
      return styles.btn_md;
    case "large":
      return styles.btn_lg;
    default:
      return;
  }
};

export const getLabelThemeClassName = (theme) => {
  switch (theme) {
    case "primary-light":
      return styles.label_primary_light;
    case "secondary-light":
      return styles.label_secondary_light;
    case "secondary-dark":
      return styles.label_secondary_dark;
    case "logout-light":
      return styles.label_logout_light;
    default:
      return;
  }
};

export const getLabelSizeClassName = (size) => {
  switch (size) {
    case "small":
      return styles.label_sm;
    case "medium":
      return styles.label_md;
    case "large":
      return styles.label_lg;
    default:
      return;
  }
};

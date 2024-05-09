const validatePattern = (pattern, value) => {
  if (!pattern.test(value)) {
    return { isValid: false };
  }
  return { isValid: true };
};

export default validatePattern;

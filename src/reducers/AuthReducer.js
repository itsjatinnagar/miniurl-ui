export const initialState = {
  email: null,
  user: null,
  showVerifyForm: false,
  isAuthenticated: false,
  loading: false,
  error: null,
  toast: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SUBMIT_EMAIL":
      return {
        ...state,
        loading: false,
        showVerifyForm: true,
        email: payload.email,
      };
    case "VERIFY_CODE":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload.data,
      };
    case "SET_USER":
      return {
        ...state,
        loading: false,
        user: payload.data,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case "SET_LOADING":
      return { ...state, loading: true, error: null };
    case "SET_ERROR":
      return { ...state, loading: false, error: payload.message };
    case "SET_TOAST":
      return { ...state, loading: false, toast: payload };
    default:
      throw new Error("Undefined Action: " + type);
  }
};

export default reducer;

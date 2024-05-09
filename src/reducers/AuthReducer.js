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
    case "SEND_EMAIL":
      return {
        ...state,
        email: payload,
        showVerifyForm: true,
        loading: false,
        error: null,
      };
    case "SET_USER":
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case "EDIT_EMAIL":
      return {
        ...state,
        email: null,
        showVerifyForm: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
      };
    case "RESEND":
      return {
        ...state,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "SET_TOAST":
      return {
        ...state,
        loading: false,
        toast: payload,
      };
    default:
      throw new Error("Undefined Action: " + type);
  }
};

export default reducer;

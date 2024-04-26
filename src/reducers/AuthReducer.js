export const initialState = {
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
      console.log("🚀 ~ AuthReducer ~ SUBMIT_EMAIL ~ payload:", payload);
      return {
        ...state,
        loading: false,
        showVerifyForm: true,
      };
    case "VERIFY_CODE":
      console.log("🚀 ~ AuthReducer ~ VERIFY_CODE ~ payload:", payload);
      return {
        ...state,
        loading: false,
      };
    case "SET_USER":
      console.log("🚀 ~ AuthReducer ~ SET_USER ~ payload:", payload);
      return {
        ...state,
        loading: false,
        user: payload.data,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case "SET_LOADING":
      return { ...state, loading: true, error: null };
    case "SET_ERROR":
      console.log("🚀 ~ AuthReducer ~ SET_ERROR ~ payload:", payload);
      return { ...state, loading: false };
    default:
      throw new Error("Undefined Action: " + type);
  }
};

export default reducer;

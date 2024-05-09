export const initialState = {
  links: [],
  loading: false,
  error: null,
  toast: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_LINKS":
      return {
        ...state,
        links: [...payload.data, ...state.links],
        loading: false,
        error: null,
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

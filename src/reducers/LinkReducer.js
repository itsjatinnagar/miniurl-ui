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
        loading: false,
        links: [...state.links, ...payload.data],
      };
    case "SET_LOADING":
      return { ...state, loading: true, error: null };
    case "SET_ERROR":
      return { ...state, loading: false };
    default:
      throw new Error("Undefined Action: " + type);
  }
};

export default reducer;

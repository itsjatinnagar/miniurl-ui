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
      console.log("🚀 ~ LinkReducer ~ SET_LINKS ~ payload:", payload);
      return {
        ...state,
        loading: false,
        links: [...state.links, ...payload.data.links],
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

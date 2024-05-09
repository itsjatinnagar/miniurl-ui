import request from "../utilities/request";
import validatePattern from "../utilities/validator";

export const fetchLinks = async (dispatch) => {
  try {
    dispatch({ type: "SET_LOADING" });
    const response = await request("/links");
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    dispatch({ type: "SET_LINKS", payload: data });
  } catch (error) {
    dispatch({
      type: "SET_TOAST",
      payload: { type: "error", message: error.message },
    });
  }
};

export const createLink = async (dispatch, link) => {
  const result = validatePattern(
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    link
  );
  if (!result.isValid) {
    return dispatch({
      type: "SET_ERROR",
      payload: "Invalid URL",
    });
  }
  try {
    dispatch({ type: "SET_LOADING" });
    const response = await request("/shorten", "POST", { link });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    dispatch({ type: "SET_LINKS", payload: data });
  } catch (error) {
    dispatch({
      type: "SET_TOAST",
      payload: { type: "error", message: error.message },
    });
  }
};

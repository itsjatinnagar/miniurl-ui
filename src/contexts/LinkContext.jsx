import { createContext, useContext, useEffect, useReducer } from "react";
import linkReducer, { initialState } from "../reducers/LinkReducer";
import request from "../utilities/request";
import Toast from "../components/Toast";

const LinkContext = createContext(null);

export default function LinkProvider({ children }) {
  const [state, dispatch] = useReducer(linkReducer, initialState);

  const fetchLinks = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await request("/links");
      const data = await response.json();
      if (response.status !== 200) {
        throw new Error(data.message);
      }
      dispatch({ type: "SET_LINKS", payload: data });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: { type: "error", message: "Failed to fetch links" },
      });
    }
  };

  const createLink = async (link) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await request("/shorten", "POST", { link });
      const data = await response.json();
      if (response.status !== 200) {
        throw new Error(data.message);
      }
      dispatch({ type: "SET_LINKS", payload: data });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: { type: "error", message: "Failed to create link" },
      });
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <LinkContext.Provider value={{ ...state, createLink, fetchLinks }}>
      {children}
      {state.toast && (
        <Toast
          title={state.toast.title}
          subtitle={state.toast.subtitle}
          type={state.toast.type}
        />
      )}
    </LinkContext.Provider>
  );
}

export const useLink = () => {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};

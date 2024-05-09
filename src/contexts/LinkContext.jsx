import { createContext, useContext, useEffect, useReducer } from "react";
import linkReducer, { initialState } from "../reducers/LinkReducer";
import Toast from "../components/Toast";
import { createLink, fetchLinks } from "../services/linkService";

const LinkContext = createContext(null);

export default function LinkProvider({ children }) {
  const [state, dispatch] = useReducer(linkReducer, initialState);

  useEffect(() => {
    fetchLinks(dispatch);
  }, []);

  return (
    <LinkContext.Provider
      value={{
        ...state,
        createLink: createLink.bind(null, dispatch),
        fetchLinks: fetchLinks.bind(null, dispatch),
      }}
    >
      {children}
      {state.toast && (
        <Toast message={state.toast.message} type={state.toast.type} />
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

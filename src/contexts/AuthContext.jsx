import { createContext, useContext, useEffect, useReducer } from "react";
import authReducer, { initialState } from "../reducers/AuthReducer";
import request from "../utilities/request";
import Toast from "../components/Toast";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const sendEmail = async (email) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await request("/login", "POST", { email });
      const data = await response.json();
      if (response.status !== 200) {
        throw new Error(data.message);
      }
      dispatch({ type: "SUBMIT_EMAIL", payload: data });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: { type: "error", message: "Failed to send email" },
      });
    }
  };

  const verifyCode = async (code) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await request("/verify", "POST", { code });
      const data = await response.json();
      if (response.status === 200) {
        dispatch({ type: "VERIFY_CODE", payload: data });
      } else if (response.status === 400) {
        dispatch({ type: "SET_ERROR", payload: data });
      } else {
        throw new Error(data);
      }
    } catch (error) {
      dispatch({
        type: "SET_TOAST",
        payload: { type: "error", message: "Failed to verify code" },
      });
    }
  };

  const fetchUser = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await request("/user");
      const data = await response.json();
      if (response.status !== 200) {
        throw new Error(data.message);
      }
      dispatch({ type: "SET_USER", payload: data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Failed to fetch user" });
    }
  };

  const logout = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await request("/logout");
      const data = await response.json();
      dispatch({ type: "LOGOUT", payload: data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Failed to logout user" });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, sendEmail, verifyCode, logout }}>
      {children}
      {state.toast && (
        <Toast
          title={state.toast.title}
          subtitle={state.toast.subtitle}
          type={state.toast.type}
        />
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};

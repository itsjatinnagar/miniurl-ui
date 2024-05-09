import { createContext, useContext, useEffect, useReducer } from "react";
import authReducer, { initialState } from "../reducers/AuthReducer";
import Toast from "../components/Toast";
import {
  editEmail,
  fetchUser,
  logout,
  resendCode,
  sendEmail,
  verifyCode,
} from "../services/authService";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    fetchUser(dispatch);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        editEmail: editEmail.bind(null, dispatch),
        fetchUser: fetchUser.bind(null, dispatch),
        logout: logout.bind(null, dispatch),
        resendCode: resendCode.bind(null, dispatch),
        sendEmail: sendEmail.bind(null, dispatch),
        verifyCode: verifyCode.bind(null, dispatch),
      }}
    >
      {children}
      {state.toast && (
        <Toast message={state.toast.messsage} type={state.toast.type} />
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

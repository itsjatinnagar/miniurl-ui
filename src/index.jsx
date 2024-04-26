import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./contexts/AuthContext.jsx";
import LinkProvider from "./contexts/LinkContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

function Provider({ children }) {
  return (
    <AuthProvider>
      <LinkProvider>{children}</LinkProvider>
    </AuthProvider>
  );
}
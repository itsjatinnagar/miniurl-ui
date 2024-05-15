import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./contexts/AuthContext.jsx";
import LinkProvider from "./contexts/LinkContext.jsx";
import InputProvider from "./contexts/InputContext.jsx";
import Loader from "./components/Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <React.StrictMode>
      <Suspense
        fallback={
          <div className="h-full w-full grid place-items-center">
            <Loader className="primary lg" />
          </div>
        }
      >
        <App />
      </Suspense>
    </React.StrictMode>
  </Provider>
);

function Provider({ children }) {
  return (
    <AuthProvider>
      <LinkProvider>
        <InputProvider>{children}</InputProvider>
      </LinkProvider>
    </AuthProvider>
  );
}

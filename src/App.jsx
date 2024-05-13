import { lazy } from "react";
import { useAuth } from "./contexts/AuthContext";
const DashboardComponent = lazy(() => import("./pages/Dashboard"));
const HomepageComponent = lazy(() => import("./pages/Homepage"));

export default function App() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <DashboardComponent />;
  } else {
    return <HomepageComponent />;
  }
}

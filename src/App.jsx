import { useAuth } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";

export default function App() {
  const { isAuthenticated } = useAuth();

  return <>{isAuthenticated ? <Dashboard /> : <Homepage />}</>;
}

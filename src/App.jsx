import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import { useAuth } from "./contexts/AuthContext";

export default function App() {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) {
		return <Dashboard />;
	} else {
		return <Homepage />;
	}
}

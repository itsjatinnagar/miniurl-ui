import { useAuth } from "../contexts/AuthContext";
import Profile from "./Profile";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="px-6 bg-white">
      <div className="container mx-auto h-20 flex items-center justify-between">
        <img src="/images/logo.svg" alt="miniurl logo" />
        {user ? (
          <Profile user={user} />
        ) : (
          <button className="px-4 py-2 border border-solid border-primary rounded-md">
            <span className="text-primary font-medium">Login/signup</span>
          </button>
        )}
      </div>
    </header>
  );
}

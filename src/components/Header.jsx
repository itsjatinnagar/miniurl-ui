import { useAuth } from "../contexts/AuthContext";
import { useInput } from "../contexts/InputContext";
import Profile from "./Profile";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="px-6 bg-white">
      <div className="container mx-auto h-20 flex items-center justify-between">
        <img src="/images/logo.svg" alt="miniurl logo" className="h-7" />

        {user ? <Profile user={user} /> : <LoginButton />}
      </div>
    </header>
  );
}

function LoginButton() {
  const { focusInput } = useInput();

  return (
    <button
      className="h-10 px-3 rounded transition-colors hover:bg-primary/5"
      onClick={focusInput}
    >
      <span className="inline-block text-primary font-medium">
        Login/signup
      </span>
    </button>
  );
}

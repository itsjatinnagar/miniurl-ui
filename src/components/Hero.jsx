import { useAuth } from "../contexts/AuthContext";
import LoginForm from "./LoginForm";
import VerifyForm from "./VerifyForm";

export default function Hero() {
  const { showVerifyForm } = useAuth();

  return (
    <main className="hero container mx-auto px-4 pt-14 gap-y-10">
      <section>
        <h1 className="text-5xl font-bold text-center">
          More than just <span className="text-primary">shorter</span> links
        </h1>
        <h4 className="mt-4 text-base text-gray-800 text-center">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </h4>
      </section>
      <section>
        <div className="p-5 rounded-lg bg-white text-center">
          {showVerifyForm ? <VerifyForm /> : <LoginForm />}
        </div>
      </section>
    </main>
  );
}

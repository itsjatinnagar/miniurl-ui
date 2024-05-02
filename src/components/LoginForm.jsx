import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Loader from "./Loder";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const { loading, error, sendEmail } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(email);
  };

  return (
    <>
      <h2 className="font-semibold text-2xl text-center">Get Started</h2>
      <p className="mt-4 px-2 text-base text-center">
        We will send you a 4-digit code to your email address.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-y-3">
        <div>
          <input
            type="text"
            inputMode="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 w-full px-2 text-primary border border-solid border-primary-950 rounded focus:border-primary"
            required
          />
          {error && (
            <span className="inline-block mt-1 text-sm text-error">
              {error}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center h-10 w-full px-2 bg-primary text-white rounded"
          disabled={loading}
        >
          {loading ? <Loader className="light sm" /> : "Continue with Email"}
        </button>
      </form>
    </>
  );
}

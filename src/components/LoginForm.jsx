import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const { sendEmail } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(email);
  };

  return (
    <>
      <h2 className="font-semibold text-xl">Get Started</h2>
      <p className="px-2 text-base">
        We&apos;ll send you a 6-digit code to your entered email address
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 w-full px-2 text-primary border border-solid border-primary-950 rounded focus:border-primary"
          required
        />

        <button
          type="submit"
          className="h-10 w-full mt-1 px-2 bg-primary text-white rounded"
        >
          <span>Continue with Email</span>
        </button>
      </form>
    </>
  );
}

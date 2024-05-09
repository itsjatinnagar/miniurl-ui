import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Loader from "./Loader";
import { useInput } from "../contexts/InputContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const { sendEmail } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(email);
  };

  return (
    <div className="form-card p-6 bg-white rounded-lg">
      <h2 className="font-semibold text-2xl text-center">Get Started</h2>
      <p className="mt-2 px-2 text-base text-gray-800 text-center">
        We will send you a 4-digit code to your email address.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-y-4">
        <Input value={email} handleEmail={setEmail} />
        <Button />
      </form>
    </div>
  );
}

function Input({ value, handleEmail }) {
  const { error } = useAuth();
  const { setInputRef } = useInput();
  const className = `h-10 w-full px-2 text-primary rounded border border-solid ${
    error ? "border-error" : "border-primary-950 focus:border-primary"
  }`;

  return (
    <div className="input-group">
      <input
        type="text"
        inputMode="email"
        name="email"
        id="email"
        autoComplete="off"
        placeholder="Email Address"
        value={value}
        onChange={(e) => handleEmail(e.target.value)}
        className={className}
        ref={setInputRef}
        required
      />
      {error && (
        <span className="inline-block mt-1 text-sm text-error">{error}</span>
      )}
    </div>
  );
}

function Button() {
  const { loading } = useAuth();
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center h-10 w-full bg-primary/80 text-white rounded hover:bg-primary"
      disabled={loading}
    >
      {loading ? <Loader className="light sm" /> : "Continue with Email"}
    </button>
  );
}

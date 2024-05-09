import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Loader from "./Loader";

export default function VerifyForm() {
  const [code, setCode] = useState("");
  const { email, editEmail, resendCode, verifyCode } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyCode(code);
  };

  return (
    <div className="form-card p-6 bg-white rounded-lg">
      <h2 className="font-semibold text-2xl text-center">
        Verify Your Identity
      </h2>
      <p className="mt-2 text-base text-gray-800 text-center">
        <span>We&apos;ve sent the code to</span>
        <span className="block text-center font-semibold">
          <span>{email} </span>
          <button className="inline underline text-primary" onClick={editEmail}>
            edit
          </button>
        </span>
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-y-4">
        <Input value={code} handleCode={setCode} />
        <Button />
      </form>

      <p className="mt-4 text-sm text-gray-800 text-center">
        <span>Didn't receive an email? </span>
        <button
          className="inline underline font-semibold text-primary"
          onClick={resendCode}
        >
          resend
        </button>
      </p>
    </div>
  );
}

function Input({ value, handleCode }) {
  const { error } = useAuth();
  const className = `h-10 w-full px-2 text-primary rounded border border-solid ${
    error ? "border-error" : "border-primary-950 focus:border-primary"
  }`;
  return (
    <div className="input-group">
      <input
        type="text"
        inputMode="numeric"
        name="code"
        id="code"
        autoComplete="off"
        placeholder="Enter the code"
        value={value}
        onChange={(e) => handleCode(e.target.value)}
        className={className}
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
      {loading ? <Loader className="light sm" /> : "Continue"}
    </button>
  );
}

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Loader from "./Loder";

export default function VerifyForm() {
  const [code, setCode] = useState("");
  const { loading, error, email, verifyCode } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyCode(code);
  };

  return (
    <>
      <h2 className="font-semibold text-2xl text-center">
        Verify Your Identity
      </h2>
      <p className="mt-4 px-2 text-base text-center">
        We&apos;ve sent the code to
      </p>
      <p className="text-sm text-center font-semibold">
        <span>{email}</span>
        <button className="ml-1 px-2 py-1 text-primary">Edit</button>
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-y-3">
        <div>
          <input
            type="text"
            inputMode="numeric"
            name="code"
            id="code"
            autoComplete="off"
            placeholder="Enter the code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
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
          {loading ? <Loader className="light sm" /> : "Continue"}
        </button>
      </form>
      <p className="mt-2 text-sm text-center">
        <span>Didn't receive an email?</span>
        <button className="px-2 py-1 font-medium text-primary">Resend</button>
      </p>
    </>
  );
}

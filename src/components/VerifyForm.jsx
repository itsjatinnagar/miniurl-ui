import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function VerifyForm() {
  const [code, setCode] = useState("");
  const { verifyCode } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyCode(code);
  };

  return (
    <>
      <h2 className="font-semibold text-xl">Verify Your Identity</h2>
      <p className="px-2 text-base">We&apos;ve sent an email with your code</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          inputMode="numeric"
          name="code"
          id="code"
          placeholder="Enter the code"
          pattern="\d{6}"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="h-10 w-full px-2 text-primary border border-solid border-primary-950 rounded focus:border-primary"
          required
        />

        <button
          type="submit"
          className="h-10 w-full mt-1 px-2 bg-primary text-white rounded"
        >
          Continue
        </button>
      </form>
    </>
  );
}

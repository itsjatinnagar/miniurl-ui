import { useEffect, useState } from "react";
import { useLink } from "../contexts/LinkContext";
import Loader from "./Loader";

export default function ShortenForm() {
  const [link, setLink] = useState("");
  const { links, createLink } = useLink();

  const handleSubmit = (e) => {
    e.preventDefault();
    createLink(link);
  };

  useEffect(() => {
    setLink("");
  }, [links]);

  return (
    <div className="form-card w-full p-6 bg-white rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row">
        <Input handleLink={setLink} value={link} />
        <Button />
      </form>
    </div>
  );
}

function Input({ value, handleLink }) {
  const { error } = useLink();
  const className = `h-10 w-full px-2 text-primary rounded border border-solid ${
    error ? "border-error" : "border-primary-950 focus:border-primary"
  }`;
  return (
    <div className="input-group w-full">
      <input
        type="text"
        inputMode="url"
        name="link"
        id="link"
        autoComplete="off"
        placeholder="https://example.com/very-lonng-url"
        value={value}
        onChange={(e) => handleLink(e.target.value)}
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
  const { loading } = useLink();
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center h-10 w-full bg-primary/80 text-white rounded hover:bg-primary md:max-w-60"
    >
      {loading ? <Loader className="light sm" /> : "Shorten It!"}
    </button>
  );
}

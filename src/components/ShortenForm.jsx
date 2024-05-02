import { useState } from "react";
import { useLink } from "../contexts/LinkContext";
import Loader from "./Loder";

export default function ShortenForm() {
  const [link, setLink] = useState("");
  const { loading, error, createLink } = useLink();

  const handleSubmit = (e) => {
    e.preventDefault();
    createLink(link);
    setLink("");
  };

  return (
    <div className="form-card p-4 bg-white rounded">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
        <div>
          <input
            type="text"
            inputMode="url"
            name="link"
            id="link"
            autoComplete="off"
            placeholder="https://example.com/very-lonng-url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
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
          className="inline-flex items-center justify-center h-10 w-full mt-1 px-2 bg-primary text-white rounded"
        >
          {loading ? <Loader className="light sm" /> : "Shorten It!"}
        </button>
      </form>
    </div>
  );
}

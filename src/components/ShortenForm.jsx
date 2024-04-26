import { useState } from "react";
import { useLink } from "../contexts/LinkContext";

export default function ShortenForm() {
  const [link, setLink] = useState("");
  const { createLink } = useLink();

  const handleSubmit = (e) => {
    e.preventDefault();
    createLink(link);
  };

  return (
    <div className="form-card p-2 bg-white rounded">
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          name="link"
          id="link"
          autoComplete="off"
          placeholder="https://example.com/very-lonng-url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="h-10 w-full px-2 text-primary border border-solid border-primary-950 rounded focus:border-primary"
          required
        />
        <button
          type="submit"
          className="h-10 w-full mt-1 px-2 bg-primary text-white rounded"
        >
          Shorten It!
        </button>
      </form>
    </div>
  );
}

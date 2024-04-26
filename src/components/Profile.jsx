import { useEffect, useRef, useState } from "react";

export default function Profile({ user }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center gap-x-4">
      <button
        className="button h-8 w-8 bg-[#000] rounded-full"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-lg font-medium text-white uppercase">
          {user.email.at(0)}
        </span>
      </button>

      {open && (
        <div
          className="profile-card absolute top-full right-0 mt-2 p-3 bg-white rounded-md"
          ref={ref}
        >
          <div className="flex items-center justify-center gap-x-2">
            <div className="inline-flex items-center justify-center h-10 w-10 shrink-0 bg-[#000] rounded-full">
              <span className="text-2xl font-medium text-white uppercase">
                {user.email.at(0)}
              </span>
            </div>
            <p className="flex flex-col items-start justify-center gap-y-1">
              <span className="text-lg">{user.email}</span>
              <span className="text-sm text-gray-700">Member since 2024</span>
            </p>
          </div>
          <hr className="my-2 border-primary-950" />
          <button className="flex items-center justify-start h-10 w-full rounded hover:bg-error/10">
            <div className="px-1 inline-flex items-center gap-x-1">
              <img src="/images/logout.svg" alt="logout" />
              <span className="text-error">Logout</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
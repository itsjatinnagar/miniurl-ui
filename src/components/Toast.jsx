import { useEffect, useState } from "react";

export default function Toast({ title, description, type }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (type) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [type]);

  if (!visible) return null;

  return (
    <div className={`toast toast-${type} bg-white rounded`}>
      <div className="toast-body py-3 px-5">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}

export default function Loader({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="25 25 50 50"
      className={`loader ${className}`}
    >
      <circle r="20" cx="50" cy="50"></circle>
    </svg>
  );
}

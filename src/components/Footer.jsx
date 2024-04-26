export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-10 flex items-center justify-center text-center">
      <p className="text-sm text-gray-600">
        Copyright &copy; {currentYear} MiniUrl
      </p>
    </footer>
  );
}

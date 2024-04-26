import Header from "../components/Header";
import LinksList from "../components/LinksList";
import ShortenForm from "../components/ShortenForm";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="px-4 my-5">
        <ShortenForm />
        <hr className="my-5 border border-solid border-primary-900" />
        <LinksList />
      </main>
    </>
  );
}

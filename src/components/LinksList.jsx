import { useLink } from "../contexts/LinkContext";
import EmptyLinksList from "./EmptyLinksList";
import LinkCard from "./LinkCard";
import Loader from "./Loder";

export default function LinksList() {
  const { loading, links } = useLink();

  if (loading)
    return (
      <div className="flex-auto flex flex-col items-center justify-center text-center">
        <Loader className="primary lg" />
      </div>
    );
  if (links.length === 0) return <EmptyLinksList />;
  return (
    <div className="flex flex-col gap-8">
      {links.map((link) => (
        <LinkCard key={link.id} data={link} />
      ))}
      <div className="flex items-center justify-center gap-4 text-sm">
        <hr className="w-12 border border-solid border-primary-800" />
        <p className="max-w-sm text-center text-base text-primary-100">
          You&apos;ve reached the end of your links
        </p>
        <hr className="w-12 border border-solid border-primary-800" />
      </div>
    </div>
  );
}

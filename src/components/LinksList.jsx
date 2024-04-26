import { useLink } from "../contexts/LinkContext";
import LinkCard from "./LinkCard";

export default function LinksList() {
  const { loading, links } = useLink();

  if (loading) return <span>Loading......</span>;

  console.log(links);
  return (
    <div className="flex flex-col gap-8">
      {links.map((link) => (
        <LinkCard key={link.id} data={link} />
      ))}
    </div>
  );
}

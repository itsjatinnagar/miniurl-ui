import { useState } from "react";
import { formatDate } from "../utilities/formatter";

export default function LinkCard({ data }) {
  return (
    <div className="p-6 flex flex-col bg-white rounded-xl">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col flex-1 gap-6">
          <ShortLink hash={data["hash"]} />

          <div className="flex flex-col flex-1 gap-4">
            <LongLink long_url={data["long_url"]} />

            <div className="flex flex-col flex-wrap gap-4 sm:flex-row sm:mt-4">
              <StatsInfo icon="chart" info={data["clicks"]} title="Clicks" />
              <StatsInfo
                icon="calendar"
                info={formatDate(data["created_at"])}
                title=""
              />
            </div>
          </div>
        </div>
        <hr className="border border-solid border-primary-950 md:hidden" />
        <div className="flex flex-row gap-x-2 sm:justify-end">
          <CopyButton hash={data["hash"]} />
          <CodeButton hash={data["hash"]} />
        </div>
      </div>
    </div>
  );
}

function ShortLink({ hash }) {
  const href = window.location.href + hash;

  return (
    <h3 className="text-xl font-semibold">
      <a
        href={href}
        className="flex text-primary hover:underline"
        target="_blank"
      >
        <span className="hidden-text">{window.location.origin}</span>
        <span>/{hash}</span>
      </a>
    </h3>
  );
}

function LongLink({ long_url }) {
  return <p className="hidden-text text-gray-800">{long_url}</p>;
}

function StatsInfo({ icon, title, info }) {
  return (
    <div className="inline-flex items-center justify-start gap-x-1">
      <img src={`/images/${icon}.svg`} alt={icon} className="h-4 w-4" />
      <span className="text-sm">
        {info} {title}
      </span>
    </div>
  );
}

function CopyButton({ hash }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const href = window.location.href + hash;
    try {
      await navigator.clipboard.writeText(href);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setIsCopied(false);
    }
  };

  return (
    <button
      className="h-10 w-36 min-w-fit text-sm text-primary border border-solid border-primary-900 rounded transition-colors hover:bg-primary/5"
      onClick={handleCopy}
    >
      <img src="/images/copy.svg" alt="copy icon" className="h-6 w-6" />
      <span className="text-base font-medium">
        {isCopied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

function CodeButton({ hash }) {
  const downloadCode = async () => {
    try {
      const href = window.location.href + hash;
      const imageFetch = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${href}`
      );
      const imageBlob = await imageFetch.blob();
      const imageURL = URL.createObjectURL(imageBlob);

      const a = document.createElement("a");
      a.href = imageURL;
      a.download = `${hash}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(imageURL);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      className="h-10 w-36 min-w-fit text-sm text-primary border border-solid border-primary-900 rounded transition-colors hover:bg-primary/5"
      onClick={downloadCode}
    >
      <img src="/images/download.svg" alt="download icon" className="h-6 w-6" />
      <span className="text-base font-medium">QR Code</span>
    </button>
  );
}

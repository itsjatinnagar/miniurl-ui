export default function LinkCard({ data }) {
  return (
    <div className="p-6 flex flex-col bg-white rounded-xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col flex-1 gap-6">
          <h3>
            <a href="">miniurl.onrender.com/{data["hash"]}</a>
          </h3>
          <div className="flex flex-col flex-1 gap-6">
            <a href="" className="hidden-text">
              {data["long_link"]}
            </a>
            <div className="flex flex-col flex-wrap gap-6">
              <div className="flex items-center">
                <img src="/images/bar.svg" alt="chart" />
                <span>{data["clicks"]} Clicks</span>
              </div>
              <div className="flex items-center">
                <img src="/images/calendar.svg" alt="calender" />
                <span>{data["created_at"]}</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-solid border-primary-950" />
        <div className="flex flex-row items-start gap-6">
          <button className="flex-grow px-2 h-8 text-sm text-primary border border-solid border-primary rounded active:bg-primary-950">
            <img src="/images/copy.svg" alt="copy" />
            <span>Copy</span>
          </button>
          <button className="flex-grow px-2 h-8 text-sm text-primary border border-solid border-primary rounded active:bg-primary-950">
            <img src="/images/download.svg" alt="download" />
            <span>QR Code</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EmptyLinksList() {
  return (
    <div className="w-full flex flex-col flex-grow items-center justify-center text-center">
      <h2 className="capitalize text-3xl font-bold">no links found</h2>
      <p className="mt-2 text-gray-800">
        You don&apos;t have any shortened links yet.
      </p>
    </div>
  );
}

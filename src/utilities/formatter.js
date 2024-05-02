export const formatDate = (created_at) => {
  const formatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("en-us", formatOptions);

  const datetime = new Date(Number(created_at) * 1000);
  return formatter.format(datetime);
};

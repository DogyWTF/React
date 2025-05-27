const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const useData = (unixTimestamp: number | undefined): Date | null => {
  if (unixTimestamp !== undefined) {
    return new Date(unixTimestamp * 1000);
  }
  return null;
};

export const useDataMonth = (unixTimestamp: number | undefined): string => {
  if (unixTimestamp !== undefined) {
    const date = new Date(unixTimestamp * 1000);
    return months[date.getMonth()];
  }
  return "";
};

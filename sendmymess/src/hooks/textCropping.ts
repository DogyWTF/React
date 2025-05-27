export const useTextCropping = (
  text: string = "",
  trimNumber: number
): string => {
  return text.trim().slice(0, trimNumber);
};

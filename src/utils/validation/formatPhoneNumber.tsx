export const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, "");

  const cleaned = digits.startsWith("7") ? digits.slice(1) : digits;

  let result = "+7 ";
  if (cleaned.length > 0) result += "(" + cleaned.substring(0, 3);
  if (cleaned.length >= 4) result += ") " + cleaned.substring(3, 6);
  if (cleaned.length >= 7) result += "-" + cleaned.substring(6, 8);
  if (cleaned.length >= 9) result += "-" + cleaned.substring(8, 10);

  return result;
};

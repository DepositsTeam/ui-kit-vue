export function formatEIN(ein) {
  if (!ein) return "";
  const digitsOnly = ein.replace(/\D/g, "");

  if (digitsOnly.length <= 2) {
    return digitsOnly;
  }

  return digitsOnly.slice(0, 2) + "-" + digitsOnly.slice(2);
}

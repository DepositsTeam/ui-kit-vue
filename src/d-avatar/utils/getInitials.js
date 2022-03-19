const getInitials = (name, fallback = "?") => {
  if (!name || typeof name !== "string") return fallback;
  return name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 3)
    .map((firstLetter) => firstLetter && firstLetter[0])
    .join("");
};

export default getInitials;

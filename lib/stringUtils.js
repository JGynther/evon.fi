export function parseEmailString(string) {
  if (string.includes(" ")) return null;

  const split = string.split("@");

  if (!noForbiddenDuplicates(string, ["@", "."])) return null;

  if (split.length !== 2) return null;
  if (split[0] === "" || split[1] === "") return null;

  if (!split[1].includes(".")) return null;

  const domainSplit = split[1].split(".");

  if (domainSplit.length !== 2) return null;
  if (
    domainSplit[0] === "" ||
    domainSplit[1] === "" ||
    domainSplit[1].length < 2
  )
    return null;

  return true;
}

export function noForbiddenDuplicates(string, duplicates) {
  for (let i = 0; i < duplicates.length; i++) {
    if (string.includes(duplicates[i])) {
      if (string.indexOf(duplicates[i]) !== string.lastIndexOf(duplicates[i])) {
        return false;
      }
    }
  }
  return true;
}

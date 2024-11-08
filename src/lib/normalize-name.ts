export function extractAndFormatFirstName(fullName: string | null | undefined) {
  if (!fullName) return "investidor";

  // 1. Extract the first name:
  const firstName = fullName.split(" ")[0];

  // 2. Handle empty or whitespace-only input:
  if (!firstName || firstName.trim() === "") {
    return ""; // Or throw an error if you prefer
  }

  // 3. Format the first name:
  const formattedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  return formattedFirstName;
}

const trimName = (name) => name.trim();
const toLowerCaseName = (name) => name.toLowerCase();

const trimmed = trimName("  Ashish  "); // Trim whitespace
const cleanName = toLowerCaseName(trimmed); // Convert to lowercase

console.log(cleanName); // Output: ashish

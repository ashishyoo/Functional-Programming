const trimName = (name) => name.trim();
const toLowerCaseName = (name) => name.toLowerCase();

const cleanName = toLowerCaseName(trimName("  Ashish  "));

console.log(cleanName); // Output: ashish

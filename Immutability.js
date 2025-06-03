function previewNameChangeImmutable(user, newName) {
  return { ...user, name: newName }; // New object
}

const userProfile = { name: "Ashish", bio: "Developer" };
console.log("Original:", userProfile.name); // Output: Ashish

const preview = previewNameChangeImmutable(userProfile, "Bob");
console.log("Preview:", preview.name); // Output: Bob
console.log("Original after preview:", userProfile.name); // Output: Ashish

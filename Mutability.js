function previewNameChange(user, newName) {
  user.name = newName; // Modifies original
  return user;
}

let userProfile = { name: "Ashish", bio: "Developer" };
console.log("Original:", userProfile.name); // Output: Ashish

const preview = previewNameChange(userProfile, "Bob");
console.log("Preview:", preview.name); // Output: Bob
console.log("Original after preview:", userProfile.name); // Output: Bob

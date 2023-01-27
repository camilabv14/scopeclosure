function greeting() {
  let username = "Camila";
  function displayUsername() {
    return `Hello ${username}`;
  }
  return displayUsername;
}

const g = greeting();
console.log(g());

let personName = "Maaz Khan"

console.log(personName.toLocaleLowerCase());

console.log(personName.toLocaleUpperCase());

console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));
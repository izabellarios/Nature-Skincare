let passwords = prompt("What's your password?");
console.log(passwords.length);

if (passwords >= 12) {
  console.log("It is a strong password");
} else if (passwords > 8) {
  console.log("It is an acceptable password");
} else {
  console.log("Try again");
}

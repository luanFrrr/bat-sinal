export default function generatePass() {
  let password: string = "";
  let characters: string =
    "Aa?@$#1234560011558442554Dexfecdfervegvc7890bcdefghijFGHIJLKLMNOPQRSTUVWXYZ!";
  let passwordLenght = 8;

  for (let index = 0; index < passwordLenght; index++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}

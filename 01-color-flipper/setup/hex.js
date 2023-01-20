const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomHex = "#" + generateRandomeHex();
  document.body.style.backgroundColor = randomHex;
  color.textContent = randomHex;
});

const generateRandomeHex = () => {
  let hexColor = "";
  for (let i = 0; i < 6; i++) {
    let k = Math.floor(Math.random() * hex.length);
    hexColor += hex[k];
  }
  return hexColor;
};

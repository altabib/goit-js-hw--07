function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const snapP = document.querySelector(".color");
const btn = document.querySelector(".change-color");
console.dir(snapP);

btn.addEventListener("click", (e) => {
console.log(e.target);
  body.style.backgroundColor = getRandomHexColor();
  snapP.textContent = body.style.backgroundColor;

  console.log(snapP.value);
});
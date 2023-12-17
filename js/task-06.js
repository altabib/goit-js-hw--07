function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
 


create.addEventListener("click", () => {
  const inpValue = input.value;
  createBoxes(inpValue);
  input.value = "";
});


destroy.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const boxArr = [];
    let size = 30;
    
    for (let i = 0; i < amount; i += 1) {
      size += 10;
      const color = getRandomHexColor();
      const newBox = `<div style="width: ${size}px; 
      height: ${size}px; background-color: ${color};"></div>`;
      boxArr.push(newBox);
    };
    boxes.innerHTML = boxArr.join();
  };
};
console.log(boxes);

function destroyBoxes() {
  return boxes.innerHTML = "";
};



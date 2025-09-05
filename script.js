const getNumber = (max = 11, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);
const optimazeNumber = (n) => ((n + "").length === 2 ? n : "0" + n);
const data = [];
const colors = [
  "#D83945aa",
  "#72334Baa",
  "#F4DC96aa",
  "#F28F58aa",
  "#D83D18aa",
];
let n = getNumber(41, 1);
while (n--) {
  data.push(getNumber(101));
}
console.log(data);

const box = document.querySelector(".box");
for (let val of data) {
  box.innerHTML += `<div 
  class="card" 
  style="background-color: ${
    colors[getNumber(colors.length - 1)]
  } ">${optimazeNumber(val)}</div>`;
}

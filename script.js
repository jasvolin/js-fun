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
let n = Math.floor(getNumber(61, 6) / 6) * 6;

while (n--) {
  data.push(getNumber(101));
}
console.log(data);

const box = document.querySelector(".box");
box.innerHTML = '<div class = "card"></div>';
for (let val of data) {
  box.innerHTML += `<div 
  class="card" 
  style="background-color: ${
    colors[getNumber(colors.length - 1)]
  } ">${optimazeNumber(val)}</div>`;
}
function showTime(day = new Date(2026, 1, 7)) {
  let now = new Date();
  let d, h, m, s;
  let time = Math.floor((day - now) / 1000);
  m = Math.floor(time / 60);
  s = time - m * 60;
  h = Math.floor(m / 60);
  m -= h * 60;
  d = Math.floor(h / 24);
  return `${d}д. ${h}ч. ${m} мин. ${s} сек.`;
}
console.log(showTime());

setInterval(function () {
  box.firstElementChild.innerText = `До окончания осталось ${showTime()}`;
}, 1000);

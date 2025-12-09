//DOM - Document Object Model
//object window
// console.log(window);
console.log(document);

const div1 = document.getElementById("div1");
console.log(div1);

div1.style.border = "1px solid black";

div1.className = "box";
div1.classList.add("box1");

console.log(div1);

const div1Query = document.querySelector("#div1");
const pDiv1 = document.querySelectorAll("#div1 > p");

console.log(pDiv1);

for (const i in pDiv1) {
  pDiv1[i].innerHTML = `
        <span>${+i + 1}. Next text in paragraph</span> 
    `;
}

const newP = document.createElement("p");
newP.textContent = "New element from DOM";
div1.appendChild(newP);

// HomeWork

const t = setInterval(move1, 50);
// clearInterval(t); - остановка интервала
const box = document.getElementById("box");
let counter = 0;
let counterBack = 150;
let times = 0;

// function move() {
//   //1. Базовый вариант - плавно (50 - 100 мс) переместить квадрат #box в правый нижний угол по диагонали
//   //2. Сложный вариант: челночный бег - плавно (50 - 100 мс) переместить квадрат #box в правый нижний угол по диагонали и обратно без остановки

//   if (counter <= 75) {
//     box.style.marginTop = counter + "px";
//     box.style.marginLeft = counter + "px";
//     counter++;
//   } else if (counterBack >= 0) {
//     box.style.marginTop = counterBack + "px";
//     box.style.marginLeft = counterBack + "px";
//     counterBack--;
//   }

//   if (counter > 75 && counterBack === 0) {
//     counter = 0;
//     counterBack = 75;
//     times++;
//   }

//   if (times === 5) {
//     clearInterval(t);
//     box.style.marginTop = '0px';
//     box.style.marginLeft = '0px';
//   }
// }

let step = 0;
let flag = true;

function move1() {
    flag ? step ++ : step --;

    if (step === 150 || step === 0) {
        flag = !flag;
    }

    box.style.top = step + 'px';
    box.style.left = step + 'px';
}

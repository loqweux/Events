// DZ 1

const input = document.querySelector("input");
const ul = document.querySelector("ul");

input.addEventListener("keyup", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.append(li);
});

// DZ 2

const input = document.querySelector("input");

input.addEventListener("keyup", () => {
  console.log(input.value);
});

// DZ 3

const btn = document.querySelector("#btn");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("введите имя");
    return;
  }
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.append(li);
  input.value = "";
});

// DZ 4

const form = document.querySelector("#calculator");
const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");
const select = document.querySelector("#operator");
const resultdiv = document.querySelector("#result");

// 1

form.addEventListener("submit", (event) => {
  event.preventDefault(); // для sumbit сайт не перезагружать
  const num1 = +input1.value;
  const num2 = +input2.value;
  if (isNaN(num1) || isNaN(num2)) {
    resultdiv.textContent = "Введите числа!";
    return;
  }
  let result;
  const operator = select.value;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num1 !== 0 || num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Ошибка! Не делите на ноль";
    }
  } else {
    result = "Не найден такой оператор";
  }
  resultdiv.textContent = `Результат: ${result}`;
});

// 2

form.addEventListener("submit", (event) => {
  event.preventDefault(); // для sumbit сайт не перезагружать
  const num1 = +input1.value;
  const num2 = +input2.value;
  if (isNaN(num1) || isNaN(num2)) {
    resultdiv.textContent = "Введите числа!";
    return;
  }
  const expression = num1 + select.value + num2;
  let result = eval(expression); // Метод eval() выполняет JavaScript-код, представленный строкой
  if (result === result) {
    // если result не равен NaN или Infinity
    resultdiv.textContent = `Результат: ${result}`;
  } else {
    resultdiv.textContent = "Ошибка вычислений";
  }
});

// DZ 5

const button = document.querySelector("button");

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = `rgb(${getRandomInteger(
    1,
    255
  )}, ${getRandomInteger(1, 255)}, ${getRandomInteger(1, 255)})`;
});

button.addEventListener("mouseleave", () => {
  const rotate = getRandomInteger(-180, 180);
  button.style.transform = `rotate(${rotate}deg)`;
});

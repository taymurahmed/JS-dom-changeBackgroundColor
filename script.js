// const mainDiv = document.querySelector('#main');
// const changeBtn = document.querySelector('#btn');
// const inputBtn = document.querySelector('#input-btn');
// const copyBtn = document.querySelector('#copy-btn');

// changeBtn.addEventListener('click', function(){
//   const Color = hexColor();
//   mainDiv.style.backgroundColor = Color;
//   inputBtn.value = Color;
// });

// copyBtn.addEventListener('click', function(){
//   navigator.clipboard.writeText(inputBtn.value);
//   const text = inputBtn.value;
//   // setTimeout()
//   // alert(`${text} copied`);
//   setTimeout(() => {
//     alert(`${text} copied`);
//   }, "2000");

// });

// function hexColor(){
//   const red = Math.round(Math.random() * 255);
//   const green = Math.round(Math.random() * 255);
//   const blue = Math.round(Math.random() * 255);

//   return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
// }

const mainDiv = document.querySelector("#main");
const changeBtn = document.querySelector("#btn");
const inputBtn = document.querySelector("#input-btn");
const copyBtn = document.querySelector("#copy-btn");
const tempDiv = document.querySelector("#tempDiv");

inputBtn.addEventListener("keyup", function () {
  if (colorValid()) {
    const color = inputBtn.value;
    mainDiv.style.backgroundColor = color;
  }
});

changeBtn.addEventListener("click", function () {
  const color = hexColor();
  mainDiv.style.backgroundColor = color;
  inputBtn.value = color;
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(inputBtn.value);
  const text = inputBtn.value;
  tempDiv.classList.add("alertDiv");
  tempDiv.textContent = `${text} copied`;

  // Remove the alert after 2 seconds
  setTimeout(() => {
    tempDiv.classList.remove("alertDiv");
    tempDiv.textContent = "";
  }, 2000);
});

function hexColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  return `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
}

function colorValid() {
  if (hexColor().length != 7) {
    return false;
  }
  if (hexColor()[0] != "#") {
    return false;
  }

  return true;
}

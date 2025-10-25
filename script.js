// const textArea = document.querySelector("textarea");
// const div = document.createElement("div");
// const div1 = document.querySelector(".div1");
// const main = document.querySelector(".main");

// div.innerHTML = "Limit Exceeded";
// div.style.color = "red";
// let c = 0;
// textArea.addEventListener("keydown", (e) => {
//   console.log(e.code);
//   if (e.key === "Backspace") {
//     if (c <= 0) {
//       c = 1;
//     }
//     c--;
//   }
//   if (e.key !== "Backspace") {
//     c++;
//   }
//   main.appendChild(div1);
//   if (e === "Delete") {
//     c--;
//   }
//   if (c < 50) {
//     textArea.style.color = "black";
//     textArea.style.borderColor = "black";
//     div.innerHTML = "";
//   }
//   if (c == 50) {
//     textArea.style.color = "red";
//     textArea.style.borderColor = "red";
//     div.innerHTML = "Limit Reached";
//   }
//   if (c > 50) {
//     textArea.style.color = "red";
//     textArea.style.borderColor = "red";
//     e.preventDefault();
//     c = 50;
//     main.appendChild(div);
//     div.innerHTML = "Limit Reached";
//   }

//   div1.textContent = `${c}/50`;
// });
// window.addEventListener("load", () => {
//   document.querySelector("textarea").value = "";
// });

const textArea = document.querySelector("textarea");
const div = document.createElement("div");
const div1 = document.querySelector(".div1");
const main = document.querySelector(".main");

div.style.color = "red";

function updateCount() {
  let c = textArea.value.length;

  main.appendChild(div1);
  div1.textContent = `${c}/50`;

  if (c < 50) {
    textArea.style.color = "black";
    textArea.style.borderColor = "black";
    div.textContent = "";
  } else if (c === 50) {
    textArea.style.color = "red";
    textArea.style.borderColor = "red";
    div.textContent = "Limit Reached";
    main.appendChild(div);
  } else if (c > 50) {
    c = 50;
    div1.textContent = `${c}/50`;
    textArea.value = textArea.value.slice(0, 50); // trim excess
    textArea.style.color = "red";
    textArea.style.borderColor = "red";
    div.textContent = "Limit Reached";
    main.appendChild(div);
  }
}

textArea.addEventListener("input", updateCount);

window.addEventListener("load", () => {
  textArea.value = "";
  updateCount();
});

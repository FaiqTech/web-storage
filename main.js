let inpName = document.querySelector(".inpKey");
let inpValue = document.querySelector(".inpValue");
let inpDell = document.querySelector(".inpDell");

let addBtn = document.querySelector(".addBtn");
let dellBtn = document.querySelector(".dellBtn");
let clearBtn = document.querySelector(".clearBtn");
let getBtn = document.querySelector(".getBtn");

addBtn.addEventListener("click", () => {
  localStorage.setItem(inpName.value, inpValue.value);
  inpName.value = "";
  inpValue.value = "";
});

dellBtn.addEventListener("click", () => {
  localStorage.removeItem(inpDell.value);
  inpDell.value = "";
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  inpName.value = inpValue.value = "";
  inpDell.value = "";
  alert("All data has been deleted");
});

getBtn.addEventListener("click", () => {
  console.log(localStorage.getItem(inpName.value));
});

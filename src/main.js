"use strict";
const lists = document.querySelectorAll("nav ul li");

lists.forEach((i) => {
  i.addEventListener("click", () => {
    removal(this);
    i.classList.add("active");
  });
});

function removal(a) {
  lists.forEach((i) => {
    i !== a ? i.classList.remove("active") : null;
  });
}

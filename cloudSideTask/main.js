const footer = document.querySelector(".footer");
const toggleBtn = document.querySelector(".btn");
let height = getComputedStyle(footer).height;

let heightNumber = height.slice(0, height.indexOf("p"));

toggleBtn.addEventListener("click", () => {
  if (footer.style.height === height || footer.style.height == "") {
    footer.style.height = `${heightNumber * 2}px`;
    toggleBtn.innerText = "Small me";
  } else {
    toggleBtn.innerText = "Big me";

    footer.style.height = height;
  }
});
// footer.style.height

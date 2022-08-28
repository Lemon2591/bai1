const form = document.getElementById("1");
const help = document.getElementById("2");
const helpContent = document.getElementById("3");
const closeHelpContent = document.getElementById("4");

help.addEventListener("click", () => {
  form.style.display = "none";
  helpContent.style.display = "block";
});

closeHelpContent.addEventListener("click", () => {
  form.style.display = "block";
  helpContent.style.display = "none";
});

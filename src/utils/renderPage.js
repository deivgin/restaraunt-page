export default function renderPage(page) {
  const main = document.querySelector(".main-container");
  main.innerHTML = "";
  main.appendChild(page);
}

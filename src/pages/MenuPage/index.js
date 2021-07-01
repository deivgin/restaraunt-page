import "./menuPageStyles.scss";

export default function menuPage() {
  const container = document.createElement("main");
  container.classList.add("main-container");
  container.innerText = "Menu Page";

  return container;
}

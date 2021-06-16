import "./menuPageStyles.scss";

function menuPage() {
  const container = document.createElement("main");
  container.classList.add("main-container");
  container.innerText = "Menu Page";

  return container;
}

export default menuPage;

import "./homePageStyles.scss";

function homePage() {
  const container = document.createElement("main");
  container.classList.add("main-container");
  container.innerText = "Home Page";

  return container;
}

export default homePage;

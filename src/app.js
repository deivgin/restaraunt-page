import "./main.scss";
import nav from "./components/Nav";
import main from "./components/Main";
import renderPage from "./utils/renderPage";
import homePage from "./pages/HomePage";
import footer from "./components/Footer";

export default function app() {
  const app = document.getElementById("app");

  app.appendChild(nav());
  app.appendChild(main());
  app.appendChild(footer());

  renderPage(homePage());
  document.querySelector("#homeButton").classList.add("active");
}

import nav from "./components/Nav";
import homePage from "./pages/HomePage";
import main from "./components/Main";
import renderPage from "./utils/renderPage";
import "./main.scss";
import { state } from "./utils/store";

function app() {
  const app = document.getElementById("app");

  app.appendChild(nav());
  app.appendChild(main());

  renderPage(homePage());
}

export default app;

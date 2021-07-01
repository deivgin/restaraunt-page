import nav from "./components/Nav";
import homePage from "./pages/HomePage";
import "./main.scss";
import { state } from "./utils/store";

function app() {
  const app = document.getElementById("app");
  console.log(state);

  app.appendChild(nav());
  app.appendChild(homePage());
}

export default app;

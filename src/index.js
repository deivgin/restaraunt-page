import nav from "./components/Nav";
import homePage from "./pages/HomePage";
import "./main.scss";

document.getElementById("app").appendChild(nav());
document.getElementById("app").appendChild(homePage());

import renderPage from "./renderPage";
import homePage from "../pages/HomePage";
import contactPage from "../pages/ContactPage";
import menuPage from "../pages/MenuPage";

const links = [
  {
    name: "home",
    handleFunction: () => renderPage(homePage()),
  },
  {
    name: "menu",
    handleFunction: () => renderPage(menuPage()),
  },
  {
    name: "contact",
    handleFunction: () => renderPage(contactPage()),
  },
];

export default links;

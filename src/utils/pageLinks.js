import renderPage from "./renderPage";
import homePage from "../pages/HomePage";
import contactPage from "../pages/ContactPage";
import menuPage from "../pages/MenuPage";

const setActive = (chosenButton) => {
  const buttons = document.querySelectorAll(".nav__button");
  buttons.forEach((button) => {
    button === chosenButton
      ? button.classList.add("active")
      : button.classList.remove("active");
  });
};

const links = [
  {
    name: "home",
    handleFunction: (e) => {
      setActive(e.target);
      renderPage(homePage());
    },
  },
  {
    name: "menu",
    handleFunction: (e) => {
      setActive(e.target);
      renderPage(menuPage());
    },
  },
  {
    name: "contact",
    handleFunction: (e) => {
      setActive(e.target);
      renderPage(contactPage());
    },
  },
];

export default links;

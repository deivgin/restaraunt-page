import { setCurrPage } from "./store";

const links = [
  {
    name: "home",
    handleFunction: () => setCurrPage("home"),
  },
  {
    name: "menu",
    handleFunction: () => setCurrPage("menu"),
  },
  {
    name: "contact",
    handleFunction: () => setCurrPage("contact"),
  },
];

export default links;

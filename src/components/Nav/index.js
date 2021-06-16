import logo from "../Logo";
import navLinks from "./navLinks";

function nav() {
  const container = document.createElement("nav");
  container.classList.add("nav");

  container.appendChild(logo());
  container.appendChild(navLinks());

  return container;
}

export default nav;

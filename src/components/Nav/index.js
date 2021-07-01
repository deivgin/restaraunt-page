import logo from "../Logo";
import navLinks from "./navLinks";

export default function nav() {
  const container = document.createElement("nav");
  container.classList.add("nav");

  container.appendChild(logo());
  container.appendChild(navLinks());

  return container;
}

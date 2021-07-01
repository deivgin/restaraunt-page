import "./homePageStyles.scss";
import heading from "../../components/Heading";

export default function homePage() {
  const container = document.createElement("main");
  container.classList.add("main-container");
  container.innerText = "Home Page";

  container.appendChild(heading("Heading"));

  return container;
}

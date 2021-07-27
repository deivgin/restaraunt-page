import "./homePageStyles.scss";
import heading from "../../components/Heading";

export default function homePage() {
  const container = document.createElement("main");
  const mainHeading = heading("tacos");
  const mainHeading2 = heading("tacos");
  const mainHeading3 = heading("tacos");
  const desc = document.createElement("p");

  container.classList.add("home-page");
  mainHeading.classList.add("home-page__heading");
  mainHeading2.classList.add("home-page__heading");
  mainHeading3.classList.add("home-page__heading");
  desc.classList.add("home-page__desc");

  desc.innerText =
    "Try our world famous tacos and experience a whole new world of flavour";

  container.appendChild(mainHeading);
  container.appendChild(mainHeading2);
  container.appendChild(mainHeading3);
  container.appendChild(desc);

  return container;
}

import "./logoStyles.scss";

export default function logo() {
  const container = document.createElement("div");
  container.classList.add("logo");

  const heading = document.createElement("h1");
  heading.classList.add("logo__heading");
  heading.innerText = "Restaurant";
  container.appendChild(heading);
  return container;
}

import links from "../../utils/pageLinks";

function generateLinks(links) {
  return links.map((item) => {
    const link = document.createElement("li");
    const button = document.createElement("button");
    link.classList.add("nav__links--item");
    button.classList.add("nav__button");
    button.innerText = item.name;
    button.addEventListener("click", item.handleFunction);
    button.id = `${item.name}Button`;
    link.appendChild(button);
    return link;
  });
}

function navLinks() {
  const container = document.createElement("ul");
  container.classList.add("nav__links");

  generateLinks(links).forEach((item) => container.appendChild(item));

  return container;
}

export default navLinks;

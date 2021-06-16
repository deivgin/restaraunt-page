const links = [
  {
    name: "home",
    handleFunction: () => console.log("ClickHome"),
  },
  {
    name: "menu",
    handleFunction: () => console.log("ClickMenu"),
  },
  {
    name: "contact",
    handleFunction: () => console.log("ClickContact"),
  },
];

function generateLinks(links) {
  return links.map((item) => {
    const link = document.createElement("button");
    link.classList.add("nav__link");
    link.innerText = item.name;
    link.addEventListener("click", item.handleFunction);
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

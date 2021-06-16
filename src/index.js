function component() {
  const element = document.createElement("h1");
  element.innerText = "Hello World!";
  return element;
}

document.getElementById("app").appendChild(component());

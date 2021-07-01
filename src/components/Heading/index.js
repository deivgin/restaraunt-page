export default function heading(content) {
  const heading = document.createElement("h1");
  heading.className = "heading-1";
  heading.innerText = content;
  return heading;
}

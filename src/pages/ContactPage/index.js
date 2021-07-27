import heading from "../../components/Heading";
import "./contactPageStyles.scss";

export default function contactPage() {
  const container = document.createElement("section");
  const mainHeading = heading("Contact");
  const address = document.createElement("p");
  const email = document.createElement("p");

  container.classList.add("contact-page");
  mainHeading.classList.add("contact-page__heading");
  address.classList.add("contact-page__info");
  email.classList.add("contact-page__email");

  address.innerText = "Address: coming to town near you";
  email.innerText = "Email: info@pinkhombre.com";

  container.appendChild(mainHeading);
  container.appendChild(address);
  container.appendChild(email);

  return container;
}

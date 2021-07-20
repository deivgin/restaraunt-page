import heading from '../../components/Heading';
import "./contactPageStyles.scss";


export default function contactPage() {
  const container = document.createElement("section");
  container.classList.add("contact-page");

  const mainHeading = heading("Contact");
  mainHeading.classList.add("contact-page__heading");
  
  container.appendChild(mainHeading)

  return container;
}

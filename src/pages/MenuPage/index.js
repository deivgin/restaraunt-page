import "./menuPageStyles.scss";
import products from "../../utils/productData";
import productCard from "../../components/ProductCard";
import heading from '../../components/Heading';

export default function menuPage() {
  const container = document.createElement("section");
  container.classList.add("menu-page");
  const mainHeading = heading("menu");
  mainHeading.classList.add("menu-page__heading");
  
  container.appendChild(mainHeading)
  products.map(({ image }) => container.appendChild(productCard(image)));

  return container;
}

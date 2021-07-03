import "./menuPageStyles.scss";
import products from "../../utils/productData";
import productCard from "../../components/ProductCard";

export default function menuPage() {
  const container = document.createElement("main");
  container.classList.add("main-container");
  container.innerText = "Menu Page";

  products.map(({ image }) => container.appendChild(productCard(image)));

  return container;
}

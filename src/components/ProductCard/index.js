import './productCardStyles.scss';

export default function productCard(imageSource) {
  const container = document.createElement("div");
  const img = document.createElement("img");
  container.classList.add("product-card");
  img.classList.add("product-card__image");
  img.alt = "taco product image";
  img.src = imageSource;
  container.appendChild(img);

  return container;
}

import { useEffect, useState } from "react";
import Card from "./Card";
import { Product } from "./Product";
import "./MainPage.css";

const API_URL = "https://api.escuelajs.co/api/v1/products";

function MainPage() {
  const [products, setProducts] = useState<Product[]>([]);

  document.querySelectorAll("img").forEach((img) => {
    img.onerror = function () {
      console.log(`Image ${img.src} failed to load`);
      // Handle failure for this particular image
    };
  });

  const FetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default MainPage;

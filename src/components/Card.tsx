/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Product } from "./Product";
import "./MainPage.css";

interface CardProps {
  product: Product;
}

function Card({ product }: CardProps) {
  return (
    <Link to="/" className="card">
      <img
        className="card-image"
        src={product.images[0].replace(/\]|\[|[""]/g, "")}
        alt={product.title}
      ></img>
      <p className="card-title">{product.title}</p>
      <p className="card-price">{product.price} &euro;</p>
    </Link>
  );
}

export default Card;

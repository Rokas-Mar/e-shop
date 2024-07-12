import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "./Product";
import "./ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product>();
  const [imgIndex, setImgIndex] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${productId}`
      );
      if (!response.ok) {
        console.error("Error fetching data");
        return;
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchData();
    }
  }, [productId]);

  const HandleImgChange = (index: number) => {
    setImgIndex(index);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="info-wrapper">
      <div className="image-container">
        <div className="image-display">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image.replace(/\]|\[|[""]/g, "")}
              alt={product.title}
              onClick={() => HandleImgChange(index)}
            />
          ))}
        </div>
        <div className="selected-image">
          <img
            src={product.images[imgIndex].replace(/\]|\[|[""]/g, "")}
            alt={product.title}
          />
        </div>
      </div>
      <div className="price">
        <h4>{product.title}</h4>
        <p>{product.price} &euro;</p>
        <button>Add to cart</button>
        <button>Save</button>
      </div>
      <div className="description">
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface categoryProp {
  id: number;
  name: string;
  image: string;
}

function Header() {
  const [categories, setCategories] = useState<categoryProp[]>([]);
  const [categoriesToggle, setCategoriesToggle] = useState(false);
  const [selected, setSelected] = useState(-1);

  const ToggleCategories = () => {
    setCategoriesToggle(!categoriesToggle);
    setSelected(-1);
  };

  const FetchCategories = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    FetchCategories();
  }, []);

  return (
    <div className="header-container">
      <h2>Buy Stuff</h2>
      <div className="header-search">
        <button
          className={`header-categories ${
            categoriesToggle ? "categories-active" : ""
          }`}
          onClick={ToggleCategories}
        >
          Categories
        </button>
        <input className="header-input" placeholder="Search for items" />
      </div>
      {categoriesToggle && (
        <div className="categories-container">
          {categories.map((category, index) =>
            index === selected ? (
              <li
                className="selected"
                key={index}
                onClick={() => {
                  setSelected(index);
                  ToggleCategories();
                }}
              >
                {category.name}
              </li>
            ) : (
              <li
                key={index}
                onClick={() => {
                  setSelected(index);
                  ToggleCategories();
                }}
              >
                {category.name}
              </li>
            )
          )}
        </div>
      )}

      <ul className="header-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

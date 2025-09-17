import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftNavbar = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories#")
      .then((res) => res.json())
      .then((data) => setcategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="font-semibold mb-6">All Category ({categories.length})</h2>

      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <NavLink
            className="btn"
            key={category.category_id}
            to={`/category/${category.category_id}`}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;

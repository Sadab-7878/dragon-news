import React from "react";
import { useLoaderData } from "react-router";
import NewsCard from "../components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p className="text-gray-400 text-sm">{news.length} News Found</p>

      <div className="flex flex-col gap-5">
        {news.map((singleNews) => (
          <NewsCard news={singleNews} key={singleNews._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;

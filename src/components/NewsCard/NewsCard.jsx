import { FaEye, FaStar } from "react-icons/fa";

export default function NewsCard(props = {}) {
  const { news } = props || {};
  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">
      {/* Author Info */}
      <div className="flex items-center gap-2 px-4 pt-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="font-semibold text-sm">{news.author.name}</p>
          <p className="text-xs text-gray-500">
            {new Date(news.author.published_date).toDateString()}
          </p>
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 pt-3 font-bold text-lg leading-snug">{news.title}</h2>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={news.image_url}
          alt={news.title}
          className="rounded-xl object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-600">
        {news.details.length > 150
          ? news.details.slice(0, 150) + "..."
          : news.details}
        <span className="text-orange-500 font-medium cursor-pointer ml-1">
          Read More
        </span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t text-sm">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar className="text-orange-400" />
          <span>{news.rating.number}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
}

// Example usage with demo data
// <NewsCard data={demoData} />

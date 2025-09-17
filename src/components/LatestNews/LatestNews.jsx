import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const LatestNews = () => {
  return (
    <>
      <div className="flex gap-2 items-center bg-base-200 p-2">
        <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>

        <Marquee pauseOnHover={true} speed={50} className="space-x-10">
          <Link to={"/news"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium distinctio provident esse nesciunt voluptates voluptatum
            vitae porro iure. Optio, quibusdam?
          </Link>

          <Link to={"/news"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium distinctio provident esse nesciunt voluptates voluptatum
            vitae porro iure. Optio, quibusdam?
          </Link>

          <Link to={"/news"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium distinctio provident esse nesciunt voluptates voluptatum
            vitae porro iure. Optio, quibusdam?
          </Link>
        </Marquee>
      </div>
    </>
  );
};

export default LatestNews;

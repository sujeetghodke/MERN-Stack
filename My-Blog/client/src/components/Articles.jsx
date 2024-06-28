import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="p-4 md:w-1/2">
          <div className="h-full border-2 border-gray-200 boder-opacity-60 rounded-lg overflow-hidden">
            <Link to={`/article/${article.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={article.thumbnail}
                alt="no img"
              />
            </Link>
            <div>
              <Link key={index} to={`/article/${article.name}`}>
                <h2 className="text-lg font-medium text-gray-900 mb-3 p-3">
                  {article.title}
                </h2>
              </Link>
              {/* <P className="leading-relaxed mb-3">
            {article.content[0].substring(0, 10)}...
          </P> */}
              <div className="flex items-center flex-wrap">
                <Link
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-3 pl-3"
                  to={`/article/${article.name}`}
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;

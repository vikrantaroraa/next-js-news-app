import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <>
      <h1>This is the News page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => {
          return (
            <li key={newsItem.id}>
              <Link href={`/news/${newsItem.slug}`}>
                <img
                  src={`/images/news/${newsItem.image}`}
                  alt={newsItem.title}
                />
                {newsItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default News;

import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const News = () => {
  return (
    <>
      <h1>This is the News page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default News;

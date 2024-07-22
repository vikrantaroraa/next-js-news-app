import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

const InterceptedImagePage = ({ params }) => {
  const newsItemSlug = params.newsSlug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop">
        <dialog className="dialog" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      </div>
    </>
  );
};

export default InterceptedImagePage;

import React from "react";
import { bookmarks as bookmarkData } from "@/constants/cardsData";
import BookmarkCard from "./bookmarkCard";

const bookmarks = () => {
  return (
    <div className="cards">
      <h1 className="cards__heading">Your Bookmarks</h1>
      <div className="bookmarks">
        {bookmarkData.map((card, index) => (
          <BookmarkCard card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default bookmarks;

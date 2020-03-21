import React from "react";
import "./index.scss";
import { IoIos } from "react-icons/io";

const Header = ({ subreddit }) => {
  const links = [
    "Following",
    <span className="white-50">|</span>,
    `/r/${subreddit}`
  ];
  return (
    <div className="header">
      {links.map((link, i) =>
        i === 2 ? (
          <div key={i} className="f6 b">
            {link}
          </div>
        ) : (
          <div key={i} className="f6">
            {link}
          </div>
        )
      )}
    </div>
  );
};

export default Header;
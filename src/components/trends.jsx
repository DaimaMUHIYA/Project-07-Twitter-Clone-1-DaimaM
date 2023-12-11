import React from "react";
import { Link } from "react-router-dom";
import iconTwitter from "../images/icon twitter.png";
import homeFill from "../images/Home-Fill.png";
import explore from "../images/Explore.png";
import notification from "../images/Notifications.png";
import messages from "../images/Messages.png";
import bookmarks from "../images/Bookmarks.png";
import lists from "../images/Lists.png";
import profile from "../images/Profile.png";
import more from "../images/More.png";
import tweetBtnXl from "../images/Tweet-Buton-Xl.png";
import searchIcon from "../images/Search.svg";

const Trends = () => {
  return (
    <div className="right-sidebar">
      <form className="search">
        <img src={searchIcon}/>
        <input type="text" placeholder="Search" />
      </form>
    </div>
  );
};

export default Trends;

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
import searchIcon from "../images/Search.png";

const Trends = () => {
  return (
    <div className="right-sidebar">
      <nav>
        <ul>
          <li className="search-container">
            <form action="/search">
              <input type="text" placeholder="Recherche..." />
              <button type="submit">
                <i class="fa fa-search search-icon"></i>
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Trends;

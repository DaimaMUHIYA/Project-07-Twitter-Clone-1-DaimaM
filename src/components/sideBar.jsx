import React from 'react';
import { Link } from 'react-router-dom';
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

const SideBar = () => {
    return (
      <div className="left-sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/home">
                <img className="link-image" src={iconTwitter} alt="logo" />
              </Link>
            </li>
            <li>
              <Link to="/home">
                <img className="link-image" src={homeFill} alt="logo" />
                <span className="link-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img className="link-image" src={explore} alt="logo" />
                <span className="link-text">Explore</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img className="link-image" src={notification} alt="logo" />
                <span className="link-text">Notifications</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img className="link-image" src={messages} alt="logo" />
                <span className="link-text">Messages</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img className="link-image" src={bookmarks} alt="logo" />
                <span className="link-text">Bookmarks</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img className="link-image" src={lists} alt="logo" />
                <span className="link-text">Lists</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img className="link-image" src={profile} alt="logo" />
                <span className="link-text">Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img className="link-image" src={more} alt="logo" />
                <span className="link-text">More</span>
              </Link>
            </li>
            <li>
              <button to="/">
                <img className="tweet-btn-Xl" src={tweetBtnXl} alt="logo" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default SideBar;
import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../images/Search.svg";
import settingsIcon from "../images/Settings.svg";
import more2 from "../images/More-2.svg";

const Trends = () => {
  return (
    <div className="right-sidebar">
      <form className="search">
        <img src={searchIcon} />
        <input type="text" placeholder="Search..." />
      </form>

      <div className="trendsList">
        <div className="trendsTitle">
          <span>Trends for you</span>
          <img src={settingsIcon} />
        </div>

        <ul>
          <li>
            <Link className="trending" to="/">
              <div className="trendingOne">
                <span className="trendingOne-text">Trending in Turkey</span>
                <img className="trendingOne-img" src={more2} />
              </div>

              <div className="squid-container">
                <span className="squid">#SQUID</span>
                <span className="number-tweet">2,066 Tweets</span>
              </div>
            </Link>

            <Link className="trending" to="/">
              <div className="trendingOne">
                <span className="trendingOne-text">Trending in Turkey</span>
                <img className="trendingOne-img" src={more2} />
              </div>

              <div className="squid-container">
                <span className="squid">#SQUID</span>
                <span className="number-tweet">2,066 Tweets</span>
              </div>
            </Link>

            <Link className="trending" to="/">
              <div className="trendingOne">
                <span className="trendingOne-text">Trending in Turkey</span>
                <img className="trendingOne-img" src={more2} />
              </div>

              <div className="squid-container">
                <span className="squid">#SQUID</span>
                <span className="number-tweet">2,066 Tweets</span>
              </div>
            </Link>

            <Link className="trending" to="/">
              <div className="trendingOne">
                <span className="trendingOne-text">Trending in Turkey</span>
                <img className="trendingOne-img" src={more2} />
              </div>

              <div className="squid-container">
                <span className="squid">#SQUID</span>
                <span className="number-tweet">2,066 Tweets</span>
              </div>
            </Link>

            <Link>
              <span className="showMore">Show more</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="followList">
        <div className="followTitle">
          <span>Who to follow</span>
        </div>

        <Link>
          
        </Link>

      </div>
    </div>
  );
};

export default Trends;

import React from "react";
import { Link } from "react-router-dom";
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

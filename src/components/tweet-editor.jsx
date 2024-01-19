import React from "react";
import meta from "../images/Meta.png";
import { Link } from "react-router-dom";

// #3. tweet-editor.

function TweetEditor() {
  return (
    <div className="tweet-editor">
      <Link>
        <img className="avatar" src="src/images/profile-photo.png" alt="Logo" />
      </Link>

      <div className="tweet-editor-form">
        <input
          className="tweet-editor-input"
          type="text"
          placeholder="What's happening ?"
        />

        <div className="tweet-editor-buttons">
          <img className="tweet-editor-actions" src={meta} alt="Logo" />
          <button className="button">Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;

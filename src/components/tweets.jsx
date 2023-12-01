import React from "react";
import buttonReplies from "../images/Button-Comment.svg";
import buttonRetweet from "../images/Button-Retweet.svg";
import buttonLike from "../images/Button-Likes.svg";
import tweetShares from "../images/Button-Shares.svg";

// #4. tweets.

function Tweets({ tweet }) {
  return (
    <div className="tweet">
      <img className="tweet-avatar" src={tweet.profilePhoto} alt="Logo" />

      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            <span className="tweet-title-author">{tweet.name}</span>
            <img className="tweet-title-author" src={tweet.verified} />
            <span className="tweet-title-details">{tweet.user}</span>
            <span className="tweet-title-details">{tweet.separator}</span>
            <span className="tweet-title-details">{tweet.timeToPublish}</span>
          </div>
          <span className="tweet-text">{tweet.tweetTextContent}</span>
          <div className="tweet-image">
            <img src={tweet.tweetImage} />
          </div>
        </div>
        <div className="tweet-actions">
          <div className="tweet-action">
            <img src={buttonReplies} alt="" />
            <span>{tweet.replies}</span>
          </div>
          <div className="tweet-action">
            <img src={buttonRetweet} alt="" />
            <span>{tweet.retweet}</span>
          </div>
          <div className="tweet-action">
            <img src={buttonLike} alt="" />
            <span>{tweet.likes}</span>
          </div>
          <div className="tweet-action">
            <img src={tweetShares} alt="" />
          </div>
          {/* <img className='tweet-action' src={buttonReplies}/>
            <img className='tweet-action' src={buttonRetweet}/>
            <img className='tweet-action' src={buttonLike}/>
            <p className='tweet-action'>{likes}</p>
            <img className='tweet-action' src={tweetShares}/> */}
        </div>
      </div>
    </div>
  );
}

export default Tweets;

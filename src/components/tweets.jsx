import React from 'react';
import verified from '../images/Verified.png';
import tweetReplies from '../images/Tweet-Replies.png';
import tweetRepliesRetweet from '../images/Tweet-Replies-retweet.png';
import tweetLikes from '../images/Tweet-Likes.png';
import tweetShares from '../images/Tweet-Shares.png';
// import topTweet from '../images/top-tweet.png';


// #4. tweets.

function Tweets({tweetTextContent, profilePhoto, tweetImage}) {
  return (
    <div className = "tweet">
      <img className = "tweet-avatar" src = {profilePhoto} alt = "Logo"/>
      
      <div className='tweet-content'>

        <div className='tweet-body'>

          <div className='tweet-title'>
{/* 
              <p>CNN</p>
              <img className='tweet-title-details' src={verified} alt="" />
              <p className='tweet-title-details'>@CNN</p>
              <p className='tweet-title-details'>.</p>
              <p className='tweet-title-details'>7m</p> */}



          </div>
          <p className='tweet-text'>{tweetTextContent}</p>
          
          <div className='tweet-actions'>
            <img src={tweetReplies} alt="" />
            <img src={tweetRepliesRetweet} alt="" />
            <img src={tweetLikes} alt="" />
            <img src={tweetShares} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Tweets;
import React from 'react';
import verified from '../images/Verified.png';
import tweetReplies from '../images/Tweet-Replies.png';
import tweetRepliesRetweet from '../images/Tweet-Replies-retweet.png';
import tweetLikes from '../images/Tweet-Likes.png';
import tweetShares from '../images/Tweet-Shares.png';
import tweetImage from '../images/DeodatM.jpg';
// import topTweet from '../images/top-tweet.png';


// #4. tweets.

function Tweets({name, user, verified, separator,timeToPublish, tweetTextContent, profilePhoto, tweetImage,}) {
  return (
    <div className = "tweet">
      <img className = "tweet-avatar" src = {profilePhoto} alt = "Logo"/>
      
      <div className='tweet-content'>

        <div className='tweet-body'>

          <div className='tweet-title'>

              <p className='tweet-title-author'>{name}</p>
              <img className='tweet-title-details' src={verified} alt="" />
              <p className='tweet-title-details'>{user}</p>
              <p className='tweet-title-details'>{separator}</p>   
              <p className='tweet-title-details'>{timeToPublish}</p>



          </div>
          <p className='tweet-text'>{tweetTextContent}</p>
          <img className='tweet-image' src={tweetImage} alt="" />
          
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
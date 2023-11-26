import React from 'react';
import verified from '../images/Verified.png';
import tweetReplies from '../images/Tweet-Replies.png';
import tweetRepliesRetweet from '../images/Tweet-Replies-retweet.png';
import tweetLikes from '../images/Tweet-Likes.png';
import tweetShares from '../images/Tweet-Shares.png';

// #4. tweets.

function Tweets({name, user, verified, separator,timeToPublish, tweetTextContent, profilePhoto, tweetImage,}) {
  return (
    <div className = "tweet">
      <img className = "tweet-avatar" src = {profilePhoto} alt = "Logo"/>
      
      <div className='tweet-content'>

        <div className='tweet-body'>

          <div className='tweet-title'>

              <span className='tweet-title-author'>{name}</span>
              <img className='tweet-title-details' src={verified}/>
              <span className='tweet-title-details'>{user}</span>
              <span className='tweet-title-details'>{separator}</span>   
              <span className='tweet-title-details'>{timeToPublish}</span>



          </div>
          <span className='tweet-text'>{tweetTextContent}</span>
          <img className='tweet-image' src={tweetImage}/>
          
          <div className='tweet-actions'>
            <img className='tweet-action' src={tweetReplies}/>
            <img className='tweet-action' src={tweetRepliesRetweet}/>
            <img className='tweet-action' src={tweetLikes}/>
            <img className='tweet-action' src={tweetShares}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Tweets;
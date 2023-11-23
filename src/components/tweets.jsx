import React from 'react';
import verified from '../images/Verified.png';
import tweetReplies from '../images/Tweet-Replies.png';


// #4. tweets.

function Tweets({textContent}) {
  return (
    <div className = "tweet">
      <img className = "tweet-avatar" src = "src/images/tweet-profile-photo.png" alt = "Logo"/>
      
      <div className='tweet-content'>

        <div className='tweet-body'>

          <div className='tweet-title'>

              <p>CNN</p>
              <img className='tweet-title-details' src={verified} alt="" />
              <p className='tweet-title-details'>@CNN</p>
              <p className='tweet-title-details'>.</p>
              <p className='tweet-title-details'>7m</p>

          </div>
          <p className='tweet-text'>{textContent}</p>
          
          <div className='tweet-actions'>
            <img src={tweetReplies} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Tweets;
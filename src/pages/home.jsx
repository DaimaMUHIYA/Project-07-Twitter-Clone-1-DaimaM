import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor.jsx';
import Tweets from '../components/tweets.jsx';

// #1. timeline.

function Home() {

  const tweetsData = [
    {
      photoProfile : "src/images/tweet-profile-photo.png",
      verified : "src/images/Verified.png",
      tweetTextContent : 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
      images : null
    },
    {
      photoProfile: "src/images/NY-Profile-Photo.png",
      verified : "src/images/Verified.png",
      tweetTextContent : 'Gardening boomed during the pandemic. Six Black writers share how has helped them re-establish, and reimagine, a connection to cultivation and the land.',
      images : "src/images/tweet-image.png"
    },
    {
      photoProfile : "src/images/Tweeter-Profile-Photo.png",
      verified : "src/images/Verified.png",
      tweetTextContent : 'BIG NEWS lol jk still Twitter',
      images : null
    },

    {
      photoProfile : "src/images/Tweeter-Profile-Photo.png",
      verified : "src/images/Verified.png",
      tweetTextContent : 'hello litrally everyone',
      images : null
    },

    {
      photoProfile : "src/images/Tweeter-Profile-Photo.png",
      tweetTextContent : 'hello litrally everyone',
      images : null
    }
  ];
  
  const tweetsList = tweetsData.map((e)=>{
    return <Tweets tweetTextContent = {e.tweetTextContent} profilePhoto= {e.photoProfile} tweetImage= {e.images} verified= {e.verified}/>
  })

  return (
    <main className="timeline">
      
      <Header />
      <TweetEditor />
      {tweetsList}
      

    </main>
  );
}

export default Home;


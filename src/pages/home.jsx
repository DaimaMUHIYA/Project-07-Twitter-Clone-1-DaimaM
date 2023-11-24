import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor.jsx';
import Tweets from '../components/tweets.jsx';

// #1. timeline.

function Home() {

  const tweetsData = [
    {
      photoProfile : "src/images/tweet-profile-photo.png",
      textContent : 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
      
      images : ""
    },
    {
      textContent : 'Gardening boomed during the pandemic. Six Black writers share how has helped them re-establish, and reimagine, a connection to cultivation and the land.',
      photoProfile: "src/images/NY-Profile-Photo.png",
      images : "src/images/tweet-image.png"
    },
    {
      photoProfile : "",
      textContent : 'BIG NEWS lol jk still Twitter',
      images : ""
    },

    {
      photoProfile : "",
      textContent : 'hello litrally everyone',
      images : ""
    }
  ]
  
  const tweetsList = tweetsData.map((e)=>{
    return <Tweets textContent = {e.textContent} profilePhoto= {e.photoProfile} tweetImage= {e.images}/>
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


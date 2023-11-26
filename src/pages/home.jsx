import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor.jsx';
import Tweets from '../components/tweets.jsx';


// #1. timeline.

function Home() {

  const tweetsData = [
    {
      name : "CNN",
      user : "@CNN",
      separator : ".",
      timeToPublish : "7m.",
      photoProfile : "src/images/tweet-profile-photo.png",
      verified : "src/images/Verified.png",
      tweetTextContent : 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
      tweetImage : ""
    },
    {
      name : "The New York Times",
      user : "@nytimes",
      separator : ".",
      timeToPublish : "2h.",
      photoProfile: "src/images/NY-Profile-Photo.png",
      verified : "src/images/Verified.png",
      tweetTextContent : 'Gardening boomed during the pandemic. Six Black writers share how has helped them re-establish, and reimagine, a connection to cultivation and the land.',
      tweetImage : "src/images/tweet-image.png"
    },
    {
      name : "Deodat Muhiya", 
      user : "@deonimuhiya",
      separator : ".",
      timeToPublish : "Oct 29.",
      photoProfile : "src/images/Tweeter-Profile-Photo.png",
      verified : "src/images/Verified.png",
      tweetTextContent : 'BIG NEWS lol jk still Twitter',
      tweetImage : "src/images/DeodatM.jpg"
    },

    {
      name : "Twitter",
      user : "@twitter",
      separator : ".",
      timeToPublish : "Oct 04.",
      photoProfile : "src/images/Tweeter-Profile-Photo.png",
      verified : "src/images/Verified.png",
      tweetTextContent : 'hello litrally everyone',
      tweetImage : ""
    },

    {
      name : "Twitter",
      verified : "src/images/Verified.png",
      user : "@twitter",
      separator : ".",
      timeToPublish : "Oct 04.",
      photoProfile : "src/images/Tweeter-Profile-Photo.png",
      tweetTextContent : 'hello litrally everyone',
      tweetImage : ""
    }
  ];
  
  const tweetsList = tweetsData.map((e)=>{
    return <Tweets tweetTextContent = {e.tweetTextContent} 
                    profilePhoto= {e.photoProfile} 
                    tweetImage= {e.tweetImage} 
                    verified= {e.verified} 
                    name= {e.name}
                    user= {e.user}
                    separator= {e.separator}
                    timeToPublish= {e.timeToPublish}
                    
                    />
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


import React from "react";
import Header from "../components/header.jsx";
import TweetEditor from "../components/tweet-editor.jsx";
import Tweets from "../components/tweets.jsx";
import CnnProfile from "../images/tweet-profile-photo.png";
import NyProfile from "../images/NY-Profile-Photo.png";
import TweeterProfile from "../images/Tweeter-Profile-Photo.png";

// #1. timeline.

function Home() {
  console.log(TweeterProfile);
  const tweetsData = [
    {
      name: "CNN",
      user: "@CNN",
      separator: ".",
      timeToPublish: "7m.",
      photoProfile: CnnProfile,
      verified: "src/images/Verified.png",
      tweetTextContent:
        'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
      likes: "184",
      replies: "57",
      retweet: "144",
      tweetImage: "",
    },
    {
      name: "The New York Times",
      user: "@nytimes",
      separator: ".",
      timeToPublish: "2h.",
      photoProfile: NyProfile,
      verified: "src/images/Verified.png",
      tweetTextContent:
        "Gardening boomed during the pandemic. Six Black writers share how has helped them re-establish, and reimagine, a connection to cultivation and the land.",
      likes: "482",
      replies: "19",
      retweet: "48",
      tweetImage: "src/images/tweet-image.png",
    },
    {
      name: "Twitter",
      user: "@twitter",
      separator: ".",
      timeToPublish: "Oct 29.",
      photoProfile: TweeterProfile,
      verified: "src/images/Verified.png",
      tweetTextContent: "BIG NEWS lol jk still Twitter.",
      likes: "267.1k",
      replies: "6.8k",
      retweet: "36.6k",
      tweetImage: "",
    },

    {
      name: "Twitter",
      user: "@twitter",
      separator: ".",
      timeToPublish: "Oct 04.",
      photoProfile: TweeterProfile,
      verified: "src/images/Verified.png",
      tweetTextContent: "hello litrally everyone.",
      likes: "3.3M",
      replies: "118.7k",
      retweet: "785.4k",
      tweetImage: "",
    },
  ];

  const tweetsList = tweetsData.map((e, index) => {
    return <Tweets key={index} tweet={e} />;
  });

  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
      {tweetsList}
    </main>
  );
}

export default Home;

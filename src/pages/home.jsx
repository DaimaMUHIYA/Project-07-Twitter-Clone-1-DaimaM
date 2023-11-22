import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor.jsx';
import Tweets from '../components/tweets.jsx';

// #1. timeline.

function Home() {
  return (
    <main className="timeline">
      
      <Header />
      <TweetEditor />
      <Tweets />

    </main>
  );
}

export default Home;


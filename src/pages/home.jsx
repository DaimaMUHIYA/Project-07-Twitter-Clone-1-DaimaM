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
      <Tweets textContent='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.' />
      <Tweets textContent='Bonjour Daima' />
      
    </main>
  );
}

export default Home;


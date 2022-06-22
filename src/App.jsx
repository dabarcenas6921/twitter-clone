import * as React from "react";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/UserProfile/UserProfile";
import Advertisements from "./components/Advertisements/Advertisements";
import {
  codepathUserProfile,
  firstTweet,
  navLinks,
  sampleNewTweet,
} from "./constants";
import { useState, useEffect } from "react";

export default function App() {
  const [userProfile, setUserProfile] = useState(codepathUserProfile);
  const [tweets, setTweets] = useState([firstTweet]);

  // useEffect(() => {
  //   console.log(tweets);
  // });

  return (
    <div className="app">
      <Navbar navLinks={navLinks} />
      <main>
        <UserProfile userProfile={userProfile} />
        <Feed tweets={tweets} setTweets={setTweets} userProfile={userProfile} />
        <Advertisements />
      </main>
    </div>
  );
}

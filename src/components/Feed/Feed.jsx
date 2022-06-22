import * as React from "react";
import Tweet from "../Tweet/Tweet";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";

export default function Feed({ tweets, setTweets, userProfile }) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox
        tweets={tweets}
        setTweets={setTweets}
        userProfile={userProfile}
      />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {tweets.map((tweet, index) => {
          return <Tweet key={index} tweet={tweet} />;
        })}
      </div>
    </div>
  );
}

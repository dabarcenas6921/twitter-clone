import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox({
  tweets,
  setTweets,
  userProfile,
  tweetText,
  setTweetText,
}) {
  function handleOnTweetTextChange(e) {
    setTweetText(e.target.value);
  }
  let tweetLength = tweetText.length;
  function handleOnSubmit() {
    let newTweet = {
      name: userProfile.name,
      handle: userProfile.handle,
      text: tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: tweets.length,
    };

    userProfile.numTweets += 1;

    setTweets([...tweets, newTweet]);
    setTweetText("");
  }

  return (
    <div className="tweet-box">
      <TweetInput value={tweetText} handleOnChange={handleOnTweetTextChange} />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={tweetText} tweetLength={tweetLength} />
        <TweetSubmitButton
          handleOnSubmit={handleOnSubmit}
          tweetLength={tweetLength}
        />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount({ tweetLength, tweetText }) {
  let content;
  if (tweetLength > 0) {
    content = 140 - tweetLength;
  }
  return <span className="tweet-length">{content}</span>;
}

export function TweetSubmitButton({ handleOnSubmit, tweetLength }) {
  let isDisabled = false;
  if (tweetLength === 0 || tweetLength > 140) {
    isDisabled = true;
  }
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button
        className="tweet-submit-button"
        disabled={isDisabled}
        onClick={handleOnSubmit}
      >
        Tweet
      </button>
    </div>
  );
}

import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😕": "Confused",
  "😞": "Disappointed",
  "😟": "Worried",
  "🤩": "Star-Struck",
  "😉": "Winking",
  "🤗": "Hugging",
  "👍": "Thumbs Up",
  "😴": "Sleeping",
  "😒": "Unamused"
}; //database or api or dictionary
var emojisWeKnow = Object.keys(emojiDictionary); //onlyy keys taken and made into array list

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry we don't have this in our DB right now";
    }

    setMeaning(meaning); // react call to show output
  } //whatever emoji we paste in input textarea-that userInput is searched with emojidictionary and value is given to meaning(output)

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  } //whichever emoji we click from visible list-that emoji's value is searched and given to meaning (output)

  return (
    <div className="App">
      <h1> Emoji Dictionary </h1>
      <input
        type="text"
        placeholder="Enter Emoji Here"
        onChange={emojiInputHandler}
      />
      <h2>{meaning}</h2> {/* Actual output set by React using useState */}
      <h3>Emoji's we have</h3>
      {emojisWeKnow.map(function (
        emoji //creating a list in react using map function
      ) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            //when clicking a emoji from list of emojis shown
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
//

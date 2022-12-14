import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "ð": "Grinning Face - conveys general pleasure and good cheer or humor.",
  "ð":
    "Beaming Face with Smiling Eyes - expresses a radiant, gratified happiness.",
  "ð": "Grinning Squinting Face - conveys excitement or hearty laughter.",
  "ð": "Grinning Face with Sweat - depict nerves or discomfort.",
  "ðĪĢ": "Rolling on the Floor Laughing - conveys hysterical laughter.",
  "ð": "Face with Tears of Joy - used to show something is funny or pleasing.",
  "ð":
    "Slightly Smiling Face - conveys a wide range of positive, happy, and friendly sentiments.",
  "ð":
    " Upside-Down Face - convey irony, sarcasm, joking, or a sense of goofiness or silliness.",
  "ð":
    "Winking Face - may signal a joke, flirtation, hidden meaning, or general positivity.",
  "ð":
    " Smiling Face with Smiling Eyes - expresses genuine happiness and warm, positive feelings.",
  "ð": "Smiling Face with Halo - represents angels, prayers, and blessings.",
  "ðĨ°":
    " Smiling Face with Hearts -  Expresses a range of happy, affectionate feelings, especially being in love.",
  "ð":
    "Smiling Face with Heart-Eyes - conveys enthusiastic feelings of love, infatuation, and adoration.",
  "ðĪĐ":
    "Star-Struck - express that someone or something is amazing, fascinating, impressive, or exciting.",
  "ð": "Face Blowing a Kiss - represent a kiss goodbye or good night .",
  "ð": "Kissing Face - conveys sentiments of love and affection.",
  "ð":
    "Kissing Face with Closed Eyes - conveys sentiments of romantic love and affection.",
  "ð": "Face Savoring Food - convey that a food item is delicious.",
  "ð":
    "Face with Tongue -  convey a sense of fun, excitement, silliness, cuteness, happiness.",
  "ð":
    "Winking Face with Tongue - conveys a sense of fun, excitement, wackiness, buffoonery, or joking.",
  "ðĪŠ":
    "Zany Face -  represents such activities as acting goofy, having fun, and partying .",
  "ð":
    "Squinting Face with Tongue - conveys a sense of fun, excitement, playfulness, hilarity, and happiness",
  "ðĪ":
    "Money-Mouth Face - convey making money, loving wealth, being or feeling rich.",
  "ðĪ":
    "Hugging Face - may be used to offer thanks and support, show love and care.",
  "ðĪŦ": "Shushing Face - convey silence, quiet, secrecy, and discreetness.",
  "ðĪ": "Thinking Face - often used to question or scorn something or someone.",
  "ðĪ": "Zipper-Mouth Face - conveys a secret or that someone will keep one.",
  "ðĪĻ":
    "Face with Raised Eyebrow - conveys suspicion, skepticism, concern, consideration, disbelief, and disapproval.",
  "ð":
    "Neutral Face -  convey mild irritation and concern or a deadpan sense of humor.",
  "ð": "Expressionless Face - convey a sense of frustration or annoyance.",
  "ðķ": "Face Without Mouth -  conveys speechlessness, humility, and silence.",
  "ð": "Smirking Face - convey flirtation or sexual innuendo.",
  "ð":
    "Unamused Face - conveys irritation, displeasure, grumpiness, and skepticism.",
  "ð":
    "Face with Rolling Eyes - conveys playful, sassy, resentful, and sarcastic.",
  "ðŽ": "Grimacing Face - conveys nervousness, embarrassment, or awkwardness.",
  "ðĪĨ": "Lying Face -  convey disbelief or may represent lying."
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var meaning = emojiDictionary[event.target.value];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database ð";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <div className="bg-image"></div>
      <h1 className="heading">Know Your Emojis</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="put your emoji here.."
      ></input>
      <div className="outputDiv">{meaning}</div>
      <div className="emojiList">
        {emojiList.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              className="emojiStyle"
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

import { useState } from "react";
import { Input } from "@material-ui/core";
import "./App.css";
const emojis = {
  "ð": "Grinning Face",
  "ð": "Grinning Face with Big Eyes",
  "ð": "Grinning Face with Smiling Eyes",
  "ð": "Beaming Face with Smiling Eyes",
  "ð": "Grinning Squinting Face",
  "ð": "Grinning Face with Sweat",
  "ðĪĢ": "Rolling on the Floor Laughing",
  "ð": "Face with Tears of Joy",
  "ðĪĐ": "Star-Struck",
  "ð": "Face Savoring Food",
  "ð": "Face with Tongue",
  "ð": "Winking Face with Tongue",
  "ðĪŠ": "Zany Face",
  "ðĪ": "Money-Mouth Face",
  "ðĪ": "Hugging Face",
  "ðĪ­": "Face with Hand Over Mouth",
  "ðĪ": "Zipper-Mouth Face",
  "ð": "Neutral Face",
  "ðķ": "Face Without Mouth"  
};
function App() {
  const [text, setText] = useState(
    "Search/click on emojis to see their meanings"
  );
  const handleClick = (emoji) => {
    setText(emojis[emoji]);
  };
  const handleChange = (e) => {
    if (emojis[e.target.value] === undefined) {
      setText("Not found in our database!");
    } else {
      setText(emojis[e.target.value]);
    }
  };
  const emojisKeys = Object.keys(emojis);
  return (
    <div>
      <header className="header">
        <h1 className="header-heading">Emoji Finder</h1>
      </header>
      <main className="main">
        <Input
          placeholder="Add emojis here"
          className="main-input"
          type="text"
          onChange={handleChange}
        />
        <div className="main-text">{text}</div>
        <div className="emojis">
          {emojisKeys.map((emoji, index) => (
            <span
              key={index}
              onClick={() => handleClick(emoji)}
              className="emoji"
            >
              {emoji}
            </span>
          ))}
        </div>
      </main>
      <footer className="footer">
        <div>
          <div className="footer-heading">About Emoji Finder</div>
          <p className="footer-text">You can find Emojis and whatnot.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

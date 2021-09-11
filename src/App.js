import { useState } from "react";
import { Input } from "@material-ui/core";
import "./App.css";
const emojis = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🤩": "Star-Struck",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤐": "Zipper-Mouth Face",
  "😐": "Neutral Face",
  "😶": "Face Without Mouth"  
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

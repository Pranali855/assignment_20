import "./EmojiButton.css";
function EmojiButton({ emoji, setEmoji}) {
  return (
    <div className="emoji-opt" onClick={()=>{setEmoji (emoji);

    }}
    >
        {emoji}
    </div>
  );
}

export default EmojiButton;
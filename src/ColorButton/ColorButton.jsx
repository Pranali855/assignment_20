import "./ColorButton.css";
function ColorButton({ bgColor, setBgcolor}) {
  return (
    <div className="color-opt" onClick={()=> { setBgcolor (bgColor); }}
    style = {{backgroundColor : bgColor}}>
 </div>
  );
}

export default ColorButton;
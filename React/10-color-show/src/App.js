import Square from "./Square";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [colorValue, setcolorValue] = useState("");
  const [hexColor, setHexColor] = useState("");
  const [isDark, setIsDark] = useState(true);

  return (
   
    <div className="App">
      <Square 
        colorValue={colorValue}
        hexColor={hexColor}
        isDark={isDark}
      />
      <Input
        colorValue={colorValue}
        setColor={setcolorValue}
        setHexColor={setHexColor}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}

export default App;

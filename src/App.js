import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./components/List";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>Japanese for developers search tool</h1>
      <p className="instructions">Search an english word below for the Japanese translation!</p>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="🔎"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default App;

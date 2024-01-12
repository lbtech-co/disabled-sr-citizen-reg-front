import { TextField } from "@mui/material";
import "./App.css";
import preeti from "preeti";
import { ChangeEvent } from "react";

function onInputChange(event: ChangeEvent<HTMLInputElement>) {
  const changedText = preeti(event.target.value);
  console.log(changedText);
}

function App() {
  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      onChange={onInputChange}
    />
  );
}

export default App;

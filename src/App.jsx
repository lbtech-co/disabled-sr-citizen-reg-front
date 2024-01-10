import { TextField } from "@mui/material";
import "./App.css";
import preeti from "preeti";

function onInputChange(event) {
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

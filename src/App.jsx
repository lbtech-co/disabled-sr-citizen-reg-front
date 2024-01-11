import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      app js
      <Outlet />
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Welcome from "./pages/Welcome/Welcome";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

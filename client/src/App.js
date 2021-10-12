import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from "./components/routes/index"

function App() {
  return (
    <>
      <h1>hey</h1>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;

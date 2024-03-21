
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home"
import GoLink from './GoLink';
import BackgroundAnimate from './BackgroundAnimate';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/:code" Component={GoLink} />
         
          <Route exact path="/background" Component={BackgroundAnimate} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

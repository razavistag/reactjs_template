import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/views/Home";
import Messages from "./views/Messages";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

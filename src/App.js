import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import Home from "../src/views/Home";
import Messages from "./views/Messages";
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};
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
      <BackTop>
        <div style={style}>
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </div>
  );
}

export default App;

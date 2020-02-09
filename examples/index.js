import React from "react";
import ReactDOM from "react-dom";
import Button from "../src/Button";

const App = () => (
  <React.Fragment>
    <h1>Just a page showing all components.</h1>
    <h2>I will be creating story book for all the components</h2>
    <Button>Hello</Button>
  </React.Fragment>
);
ReactDOM.render(<App />, document.getElementById("root"));

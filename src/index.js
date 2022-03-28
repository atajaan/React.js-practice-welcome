import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./App";

class App extends React.Component {
  render() {
    return <Welcome name='Ludwig van Beethoven' />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
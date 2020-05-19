/*** examples/src/app.js ***/
import React from "react";
import { render } from "react-dom";
import { DemoButton } from "../../src";
// import 'react-demo-component/lib/main.min.css';

const App = () => (
  <div>
    <DemoButton />
  </div>
);
render(<App />, document.getElementById("root"));

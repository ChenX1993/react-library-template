/*** examples/src/app.js ***/
import React from "react";
import { render } from "react-dom";
import { DemoButton1, DemoButton2 } from "../../src";
// import 'react-demo-component/lib/main.min.css';

const App = () => (
  <div>
    <DemoButton1 />
    <DemoButton2 />
  </div>
);
render(<App />, document.getElementById("root"));

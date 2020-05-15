import React, { Component } from "react";

class DemoButton2 extends Component {
  _onClick = () => {
    alert("Button is clicked");
  };

  render() {
    const buttonText = "Demo Button";
    return (
      <div
        style={{
          width: "100px",
          height: "40px",
          backgroundColor: "blue",
          color: "white",
        }}
        onClick={this._onClick}
        Simple
        Button2
      >
        {buttonText}
      </div>
    );
  }
}

export default DemoButton2;

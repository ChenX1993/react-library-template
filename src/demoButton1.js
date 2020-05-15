import React, { Component } from "react";

class DemoButton1 extends Component {
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
          backgroundColor: "red",
          color: "white",
        }}
        onClick={this._onClick}
        Simple
        Button1
      >
        {buttonText}
      </div>
    );
  }
}

export default DemoButton1;

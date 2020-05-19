import React, { Component } from "react";
import styled from "styled-components";

// declare prop check
type Props = {
  buttonTitle: string;
  buttonColor: string;
} & typeof defaultProps;

type State = typeof initialStatue;

// declare init state & default props
const defaultProps = Object.freeze({
  buttonTitle: "button",
  buttonColor: "blue",
});

const initialStatue = Object.freeze({ counter: 0 });

// styled component
const StyledCounter = styled.div<{ buttonColor: string }>`
  width: 100px;
  text-align: center;
  background-color: ${(props) => props.buttonColor};
  color: "white";
`;

class DemoButton extends Component<Props, State> {
  static readonly defaultProps = defaultProps;
  readonly state = initialStatue;

  _onClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const { buttonTitle, buttonColor } = this.props;
    return (
      <StyledCounter buttonColor={buttonColor} onClick={this._onClick}>
        {`${buttonTitle}: ${this.state.counter}`}
      </StyledCounter>
    );
  }
}

export default DemoButton;

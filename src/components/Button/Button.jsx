import React from "react";
import { ButtonWrapper } from "./Button.styled";

function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

export default Button;

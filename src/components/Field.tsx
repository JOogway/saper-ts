import React from "react";
import { Field } from "../models/field";

const Field: React.FC<{ field: Field }> = (props) => {
  if (props.field.isRevealed === true) {
    return RevealedField(props);
  } else {
    return UnrevealedField(props);
  }
};

function UnrevealedField(props: any) {
  return <div className={"unreveald"}></div>;
}

function RevealedField(props: any) {
  return <div className={"revealed"}></div>;
}

export default Field;

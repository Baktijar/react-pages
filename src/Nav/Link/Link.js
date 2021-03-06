import React from "react";

function Link(props) {
  return <a href={props.url}>{props.children}</a>;
}

export default Link;

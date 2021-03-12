import * as React from "react";
import * as ReactDom from "react-dom";
import styled from "styled-components";

const A = styled.div`
  font-size: 30px;
  display: flex;
  position: absolute;
  text-transform: uppercase;
`;

ReactDom.render(<A>Hello World</A>, document.querySelector("#root"));

import colors from "colors.css";
import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
body {
  min-height: 100vh;
  margin: 0;
  color: ${colors.gray};
}

#app {
  height: 100%;
  min-height: 100vh;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.querySelector("#app")
);

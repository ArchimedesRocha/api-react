import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-family: "Public Sans", sans-serif;
}

body {
  width: 100%;
  height: 100vh;
  background-color: #040011;
  color: white;
}

html {
  font-size: 62.5%;
}

img {
  max-width:100%;
  display: block;
}`;

export default GlobalStyle;

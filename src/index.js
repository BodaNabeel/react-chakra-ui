import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={false}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

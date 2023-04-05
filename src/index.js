import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import "./style.css";

const themes = createTheme({
  breakpoints: {
    values: {
      xs: 487,
      sm: 800,
      md: 900,
      lg: 1010,
      xl: 1286,
    },
  },
});

const theme = createMuiTheme({
  xl: themes.breakpoints.values.xl,
  lg: themes.breakpoints.values.lg,
  md: themes.breakpoints.values.md,
  sm: themes.breakpoints.values.sm,
  xs: themes.breakpoints.values.xs,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

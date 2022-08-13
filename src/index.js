import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import ContextManager from "./ContextManager";
ReactDOM.render(<BrowserRouter><ContextManager><MainPage /></ContextManager></BrowserRouter>, document.getElementById("root"));

import React from "react";
import  ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am from child h1"),
    React.createElement("h2", {}, "i am from child h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



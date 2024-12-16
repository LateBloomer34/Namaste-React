import React from "react";
import ReactDOM from "react-dom/client";

let con1 = React.createElement("h1" , {class:"first"} , "hello world");
let con2 = React.createElement("h2" , {class:"second"} , "hello world 2");

let con = React.createElement("div", {id: "main"} , [con1 , con2]);

let desti = ReactDOM.createRoot(document.querySelector(".rct"));
desti.render(con);

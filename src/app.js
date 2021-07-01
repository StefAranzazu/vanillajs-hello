import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML =
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " " +
    obj[objIndex] +
    " " +
    when[whenIndex];
};

let who = ["The dog", "My mom", "His turtle", "My bird", "My neighbour"];
let what = ["eat", "pissed", "crushed", "broked", "danced", "burned"];
let obj = ["my homework", "the test", "my car", "my phone", "my house"];
let when = [
  "while I was showering",
  "when I was running a marathon",
  "before the class",
  "right in time",
  "when I finished the tour",
  "during my lunch",
  "while I was praying"
];
let whoIndex = Math.floor(Math.random() * who.length);
let whatIndex = Math.floor(Math.random() * what.length);
let objIndex = Math.floor(Math.random() * obj.length);
let whenIndex = Math.floor(Math.random() * when.length);

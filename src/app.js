/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = createExcuse();
  console.log("Hello Rigo from the console!");
};

let createExcuse = () => {
  let pronoun = ["My", "Your", "A", "The"];

  let who = ["cat", "mom", "dad", "girlfriend", "neighbor", "dog"];

  let verb = ["threw up my", "did", "farted on my", "ran from my", "ate my"];

  let what = ["dinner", "chores", "mouse", "code", "homework"];

  let where = [
    "on the street",
    "in my house",
    "on the café",
    "on the restaurant"
  ];

  let proIdx = Math.floor(Math.random() * pronoun.length);
  let whIdx = Math.floor(Math.random() * who.length);
  let vrbIdx = Math.floor(Math.random() * verb.length);
  let whtIdx = Math.floor(Math.random() * what.length);
  let whereIdx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIdx] +
    " " +
    who[whIdx] +
    " " +
    verb[vrbIdx] +
    " " +
    what[whtIdx] +
    " " +
    where[whereIdx]
  );
};

/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./app.js";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let generate = () => {
    let pronoun = ["A", "The"];
    let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
    let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
    let possetion = ["homework", "toe", "car", "shoe"];
    let where = ["on the street", "in my house", "in my driveway"];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjIndx = Math.floor(Math.random() * subject.length);
    let actionIndx = Math.floor(Math.random() * action.length);
    let possetionIndx = Math.floor(Math.random() * possetion.length);
    let whereIndx = Math.floor(Math.random() * where.length);
    let excuse =
      pronoun[proIndx] +
      " " +
      subject[subjIndx] +
      " " +
      action[actionIndx] +
      " " +
      possetion[possetionIndx] +
      " " +
      where[whereIndx];

    return excuse;
  };
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generate();
  });
};

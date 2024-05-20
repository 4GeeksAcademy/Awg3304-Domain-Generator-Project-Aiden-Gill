/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["The", "Your", "Our"];
let adj = [
  "Spicy",
  "Flaming",
  "Destructive",
  "Gigantic",
  "Espansive",
  "Flamboient",
  "Friendly",
  "Super",
  "Amazing"
];
let noun = [
  "Flamingo",
  "Turtle",
  "Man",
  "Universe",
  "Racoon",
  "Computer",
  "Bannana",
  "Zombie"
];
let address = [".net", ".com", ".biz", ".org", ".io", ".dev", ".wiz"];
//END OF ARRAYS

//LOOPS
function randomDomain() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let x = 0; x < address.length; x++) {
          let fullUrl = pronoun[i] + adj[j] + noun[k] + address[x];
          console.log(fullUrl);
        }
      }
    }
  }
}
window.onload = function() {
  //node app.js
  //ARRAYS

  //END OF LOOPS
  console.log(randomDomain());

  //END CODE
  console.log("Hello Rigo from the console!");
};

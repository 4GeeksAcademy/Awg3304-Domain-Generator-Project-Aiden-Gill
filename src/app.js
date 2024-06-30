//URL Arrays
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
//Colors
let colors = [
  "lightRed",
  "red",
  "lightPurple",
  "purple",
  "lightBlue",
  "blue",
  "lightTeal",
  "teal",
  "lightGreen",
  "green",
  "lightYellow",
  "yellow",
  "lightOrange",
  "orange"
];

let timeoutID;

//Random Color Function:
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

//Random Domain Function:
function randomDomain() {
  const elementContainer = document.getElementById("elementContainer");
  elementContainer.innerHTML = "";

  //Nested Loops for the URLs
  for (let A = 0; A < pronoun.length; A++) {
    for (let B = 0; B < adj.length; B++) {
      for (let C = 0; C < noun.length; C++) {
        for (let D = 0; D < address.length; D++) {
          // String Concatenation to squish the arrays toghether resulting in the entire URL
          let URL = pronoun[A] + adj[B] + noun[C] + address[D];
          //DOM Create Element to store the URLs:
          const newElement = document.createElement("div");
          //Setting InnerHTML to the value of URL
          newElement.innerHTML = URL;
          // Class list property that will be used to access & manipulate an elements class list
          // Using the .add attribute will add the random color class to our newly generated element
          newElement.style.color = getRandomColor();
          newElement.style.fontFamily = "Snell Roundhand, cursive";
          newElement.style.marginTop = "20px";
          // AppendChild to append the newly created element to our elementContainer within the HTML document
          elementContainer.appendChild(newElement);
          // Styling for the elementContainer
        }
      }
    }
  }
  // Set timeout to change colors continuously while the button is pressed
  setTimeout(randomDomain, 100); // Adjust the delay as needed
}

// Add event listener to the button
const addButton = document.getElementById("addElementButton");
addButton.addEventListener("mousedown", randomDomain);
addButton.addEventListener("mouseup", function() {
  // Clear timeout when button is released to stop continuous color change
  clearTimeout(timeoutID);
});

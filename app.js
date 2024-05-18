//node app.js
//WITHOUT LOOPS 

let pronoun = ['The', 'Your', 'Our'];
let adj = ['Spicy', 'Flaming', 'Destructive', 'Gigantic', 'Espansive', 'Flamboient', 'Friendly', 'Super', 'Amazing'];
let noun = ['Flamingo', 'Turtle', 'Man', 'Universe', 'Racoon', 'Computer', 'Bannana', 'Zombie'];
let address = ['.net', '.com', '.biz', '.org', '.io', '.dev', '.wiz'];



const randomPronoun = pronoun[Math.floor(Math.random()* pronoun.length)];

const randomAdj = adj[Math.floor(Math.random()* adj.length)];

const randomNoun = noun[Math.floor(Math.random()* noun.length)];

const randomAddress = address[Math.floor(Math.random()* address.length)];


let fullUrl = (randomPronoun+randomAdj+randomNoun+randomAddress);
console.log(fullUrl);

//WITHOUT LOOPS
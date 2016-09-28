document.addEventListener('DOMContentLoaded', init)

function init() {

console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {

  var middleEarth = document.createElement("section");

  middleEarth.id = "middle-earth";

 for (var i = 0; i < lands.length; i++) {


  var land = document.createElement("article");

  var landName = document.createElement("h1");

  landName.textContent = lands[i];


  land.appendChild(landName);

  middleEarth.appendChild(land);

  console.log(land)

  }

  body.appendChild(middleEarth);
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {

  var theShire = document.querySelector("article");

   var hobbitList = document.createElement("ul");


   theShire.appendChild(hobbitList);

   for (var i = 0; i < hobbits.length; i++) {

     var hobbitDetail = document.createElement("li");

     hobbitDetail.className = "hobbit";

     hobbitDetail.textContent = hobbits[i];

     hobbitList.appendChild(hobbitDetail);



   }
 }
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit}
makeHobbits();



// Part 3

var frodo = document.querySelector("li");

function keepItSecretKeepItSafe() {

var ring = document.querySelector("div");
ring.id = "the-ring";
ring.className = "magic-imbued-jewelry";
ring.addEventListener('click', nazgulScreech);

frodo.appendChild(ring);
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}
keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {

    var aside = document.createElement("aside");
    var buddiesList = document.createElement("ul");

    aside.appendChild(buddiesList);

    var secondarticle = document.querySelectorAll('article');


    for (var i = 0; i < buddies.length; i++) {

      var buddiesDetail = document.createElement("li");

      buddiesDetail.textContent = buddies[i];

      buddiesList.appendChild(buddiesDetail);

      secondarticle[1].appendChild(aside);




  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

}
makeBuddies()
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var subList = document.querySelectorAll('article aside ul li');



     subList[3].textContent = "Aragorn";

}
beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var getHobbit = document.querySelector('ul')
  var selectRivendell = document.querySelector('aside');

 selectRivendell.appendChild(getHobbit);


}
leaveTheShire();




// Part 7


function forgeTheFellowShip() {

  var divRivendell = document.createElement("div");
  divRivendell.id = "the-fellowship";

 var rivendell = document.querySelectorAll('article')

 rivendell[1].appendChild(divRivendell);



  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip()

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  // gandalf.style.backgroundColor = 'white'
  // gandalf.style.border = ' 5px solid black'
}

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
// alert('pop up an alert that the horn of gondor has been blown');


}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
}
}

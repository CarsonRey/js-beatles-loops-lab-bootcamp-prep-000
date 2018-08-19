// add solution here
var musicians = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"
  ]
  
  var instruments = [
    "Guitar",
    "Bass Guitar",
    "Lead Guitar",
    "Drums"
    ]

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for( var i = 0; i < 4; i++){
   if ( i === 0) {
     return emptyArray.push(`${musicians[0]} plays ${instruments[0]}`)
   }
     
   else {return emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
   }
}
  return emptyArray;
}    
 
 var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var otherArray = [];
  var i = 0;
  while (facts.length < 4) {
    console.log(otherArray.push(`${facts[i]}!!!`))
    i++;
  }
  return otherArray;
}

n = 15;
function iLoveTheBeatles(n) {
  function incrementLoop() {
     n++;
  }
  var array = [];
  do {
    array.push("I love the Beatles!");
  }
  while (incrementLoop() && array.length < 15);
  return array;
}
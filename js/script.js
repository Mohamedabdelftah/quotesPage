var quotes = [
  {
    id: 0,
    body: "Be yourself; everyone else is already taken.",
    img : "./images/0.jpg",
    owner: " Oscar Wilde",
    
  },
  {
    id: 1,
    body: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    img : "./images/1.jpg",
    owner: "Marilyn Monroe",
  },
  {
    id: 2,
    body: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    img : "./images/2.jpg",
    owner: "Albert Einstein",
  },
  {
    id: 3,
    body: "So many books, so little time.",
    img : "./images/3.jpg",
    owner: "Frank Zappa",
  },
  {
    id: 4,
    body: "A room without books is like a body without a soul.",
    img : "./images/4.jpg",
    owner: " Marcus Tullius Cicero",
  },
  {
    id: 5,
    body: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    img : "./images/5.jpg",
    owner: "Bernard M. Baruch",
  },
  {
    id: 6,
    body: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
    img : "./images/6.jpg",
    owner: "William W. Purkey",
  },
  {
    id: 7,
    body: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    img : "./images/7.jpg",
    owner: "Dr. Seuss",
  },
]



var quoteBody = document.getElementById("quoteBody");
var quoteOwner = document.getElementById("quoteOwner");
var ownerImg = document.getElementById("ownerImg");

var oldId = -1;
var newId = 0;
var quotesNumber = quotes.length;

function generateQuote() {
  newId = Math.floor(Math.random() * quotesNumber);
  while(newId == oldId) {
    newId = Math.floor(Math.random() * quotesNumber)
  }
  console.log(newId);
  oldId = newId;

  quoteBody.innerHTML = quotes[newId].body
  quoteOwner.innerHTML = quotes[newId].owner
  ownerImg.src = quotes[newId].img
  ownerImg.alt =  quotes[newId].owner
  
}

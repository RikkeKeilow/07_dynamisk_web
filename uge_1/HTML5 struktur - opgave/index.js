// opgave 2a - udvælg DOM elementer
const overskrift_h1 = document.querySelector("h1");
overskrift_h1.textContent;
console.log(overskrift_h1.textContent);
overskrift_h1.textContent = "Billeder";
console.log(overskrift_h1.textContent);

// opgave 2b - udskift tekstindhold i elementer
const artikel1 = document.querySelector("article:nth-child(1) h3");
artikel1.innerHTML = "bla <i>bla</i> bla";
const artikel2 = document.querySelector("article:nth-child(2) h3");
artikel2.textContent = "blablabla";

// opgave 5 - test om DOM’en er loadet
document.addEventListener("DOMContentLoaded", start);
function start() {
  console.log("DOM er loadet");

  // opgave 3 - udskift billeder
  let img1 = document.querySelector("article:nth-child(1) img");
  console.log(img1);
  img1.src = "Sheena.jpg";
  img1.alt = "Et billede af min kat";

  const img2 = document.querySelector("article:nth-child(2) img");
  console.log(img2);
  img2.src = "amigo.jpg";
  img2.alt = "Et billede af min anden kat";
}

// opgave 4 - tilføj nyt element
const articleSection = document.querySelector("section");
const title = document.querySelector("header h1");
const article1 = document.querySelector("article:nth-child(1)");
const img1 = document.querySelector("article:nth-child(1) img");
const article1Heading = document.querySelector("article:nth-child(1) h3");
const article1Content = document.querySelector("article:nth-child(1) p");

let newArticle = document.createElement("article");
let newH3 = document.createElement("h3");
let newHeadlineText = document.createTextNode("Mennesker");
newH3.appendChild(newHeadlineText);
let newPic = document.createElement("img");
newPic.src = "https://placeimg.com/400/300/people";
let newContent = document.createElement("p");
newContent.textContent = "Her står der noget om mennesker";
newArticle.appendChild(newPic);
newArticle.appendChild(newH3);
newArticle.appendChild(newContent);
articleSection.appendChild(newArticle);

// opgave 6 - click event
img1.addEventListener("click", skiftBillede);
console.log("Klik");

function skiftBillede() {
  console.log(this);
  let tal = Math.round(Math.random() * 10);
  img1.src = "https://placeimg.com/400/300/arch?t=" + 4;
}

// opgave 7 - styling med javascript - AAARGH
const article = document.querySelector("article");
// article.style.boxShadow = "10px 10px 12px 0px rgba(255,0,168,0.75)";

article.addEventListener("mouseover", mouseOver);

function mouseOver() {
  console.log("mouseOver");
  document.querySelector("mouseOver").classList.add(".mouseOver");
  //   document.querySelector(".boks-16").offsetLeft;
  //   document.querySelector("article").classList.remove("mouseOver");
}

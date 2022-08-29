document.querySelector("#snaps").addEventListener("click", tjek);
document.querySelector("#beer").addEventListener("click", tjek);
document.querySelector("#cola").addEventListener("click", tjek);
document.querySelector("#faxe").addEventListener("click", tjek);

function tjek() {
  console.log(this.alt);
  if (this.alt == "øl" || this.alt == "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}

// FORKERT LØSNING
//  const minKnap = document.querySelector(".beer");
// minKnap.addEventListener("click", functionDerKaldesVedKlik);

// let points = 0;
// let antalLiv;
// let randTal;

//   if (.beer) {
//     console.log("indeholder alkohol");
//   } else if (.snaps) {
//     console.log("indeholder alkohol");
//   } else if (.faxe) {
//     console.log("alkoholfri");
//   } else (.cola) {
//     console.log("alkoholfri");
//   }

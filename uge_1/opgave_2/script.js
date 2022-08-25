function hilsen() {
  const tid = new Date().getHours();
  if (tid <= 5) {
    console.log("Godnat");
  } else if (tid <= 10) {
    console.log("Godmorgen");
  } else if (tid <= 18) {
    console.log("Goddag");
  } else if (tid <= 24) {
    console.log("Godnat");
  } else {
    console.log("Godnat");
  }
}

hilsen();

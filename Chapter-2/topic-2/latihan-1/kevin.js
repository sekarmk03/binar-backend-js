function segitiga1(panjang) {
  let print = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j <= i; j++) {
      print += "*";
    }
    print += "\n";
  }
  return print;
}

console.info(segitiga1(5));

function segitiga2(panjang) {
  let print = "";
  for (let i = panjang; i > 0; i--) {
    for (let j = panjang; j > 0; j--) {
      if (j > i) {
        print += " ";
      } else {
        print += "*";
      }
    }
    print += "\n";
  }
  return print;
}
console.log(segitiga2(5));

function segitiga3(panjang) {
  let print = "";
  for (let i = panjang; i > 0; i--) {
    for (let j = 1; j <= panjang; j++) {
      if (j >= i) {
        print += "*";
      } else {
        print += " ";
      }
    }
    print += "\n";
  }
  return print;
}
console.log(segitiga3(5));

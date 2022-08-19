function segitiga(banyak) {
  let hasil = " ";
  for (let a = 0; a <= banyak; a++) {
    for (let b = 0; b < a; b++) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitiga(5));
function segitiga2(banyak) {
  let hasil = "";
  for (let a = banyak; a >= 0; a--) {
    for (let b = 0; b < a; b++) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitiga2(5));
function segitiga3(banyak) {
  let hasil = "";
  for (let a = 0; a < banyak; a++) {
    for (let b = 0; b < banyak; b++) {
      if (b < a) {
        hasil += "  ";
      } else {
        hasil += "* ";
      }
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitiga3(5));
function segitiga4(banyak) {
    let hasil = "";
    for (let a = banyak; a > 0; a--) {
      for (let b = 0; b <= banyak; b++) {
        if (b < a) {
          hasil += "  ";
        } else {
          hasil += "* ";
        }
      }
      hasil += "\n";
    }
    return hasil;
  }
console.log(segitiga4(5));

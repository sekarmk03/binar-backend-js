/*

Output yang diinginkan :


*
* *
* * *
* * * *
* * * * *


*/
function segitiga1(panjang) {
  let star = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j <= i; j++) {
      star += "* ";
    }
    star += "\n";
  }
  return star;
}
console.log("Segitiga 1");
console.log(segitiga1(5));

/*

Output yang diinginkan :


* * * * *
* * * *
* * *
* *
*

 
*/
function segitiga2(panjang) {
  let star = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = panjang; j > i; j--) {
      star += "* ";
    }
    star += "\n";
  }
  return star;
}
console.log("Segitiga 2");
console.log(segitiga2(5));

/*

Output yang diinginkan :


* * * * *
  * * * *
    * * *
      * *
        *

 
*/

function segitiga3(panjang) {
  let star = "";
  for (let i = 1; i <= panjang; i++) {
    for (let j = 1; j <= panjang; j++) {
      if (j < i) {
        star += "  ";
      } else {
        star += "* ";
      }
    }
    star += "\n";
  }
  return star;
}

console.log("Segitiga 3");
console.log(segitiga3(5));

/*

Output yang diinginkan :


        *
      * *
    * * *
  * * * *
* * * * *

 
*/

function segitiga4(panjang) {
  let star = "";
  for (let i = panjang; i > 0; i--) {
    for (let j = 1; j <= panjang; j++) {
      if (j < i) {
        star += "  ";
      } else {
        star += "* ";
      }
    }
    star += "\n";
  }
  return star;
}
console.log("Segitiga 4");
console.log(segitiga4(5));

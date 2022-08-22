/*

Output yang diinginkan :


*
* *
* * *
* * * *
* * * * *


*/

function segitiga1(panjang) {
  let akhir = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j <= i; j++) {
      akhir += "* ";
    }
    akhir += "\n";
  }
  return akhir;
}

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
  let akhir = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = panjang; j > i; j--) {
      akhir += "* ";
    }
    akhir += "\n";
  }
  return akhir;
}

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
  let akhir = "";
  for (let i = 1; i <= panjang; i++) {
    for (let j = 1; j <= panjang; j++) {
      if (j < i) {
        akhir += "  ";
      } else {
        akhir += "* ";
      }
    }
    akhir += "\n";
  }
  return akhir;
}

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
  let akhir = "";
  for (let i = panjang; i > 0; i--) {
    for (let j = 1; j <= panjang; j++) {
      if (j < i) {
        akhir += "  ";
      } else {
        akhir += "* ";
      }
    }
    akhir += "\n";
  }
  return akhir;
}

console.log(segitiga4(5));

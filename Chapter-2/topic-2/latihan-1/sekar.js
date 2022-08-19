/*

Output yang diinginkan :


*
* *
* * *
* * * *
* * * * *


*/

function segitiga1(panjang) {
  let hasil = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j <= i; j++) {
        hasil += "*";
    }
    hasil += "\n";
  }
  return hasil;
}

console.log("No.1");
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
  let hasil = "";
  for (let i = 0; i < panjang; i++) {
    for(let j = 0; j < panjang - i; j++) {
        hasil += "*";
    }
    hasil += "\n";
  }
  return hasil;
}

console.log("No.2");
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
  let hasil = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j < i; j++) {
        hasil += " ";
    }
    for (let j = 0; j < panjang - i; j++) {
        hasil += "*";
    }
    hasil += "\n";
  }
  return hasil;
}

console.log("No.3");
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
  let hasil = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j < panjang - i - 1; j++) {
        hasil += " ";
    }
    for (let j = 0; j <= i; j++) {
        hasil += "*";
    }
    hasil += "\n";
  }
  return hasil;
}

console.log("No.4");
console.log(segitiga4(5));
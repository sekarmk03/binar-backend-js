/*

Output yang diinginkan :


*
* *
* * *
* * * *
* * * * *


*/

function segitiga1(panjang) {
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
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
  for (let i = 0; i < panjang; i++) {
    for(let j = 0; j < panjang - i; j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
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
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write(" ");
    }
    for (let j = 0; j < panjang - i; j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
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
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j < panjang - i - 1; j++) {
        process.stdout.write(" ");
    }
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

console.log(segitiga4(5));

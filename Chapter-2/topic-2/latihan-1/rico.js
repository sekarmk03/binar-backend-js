/*

Output yang diinginkan :


*
* *
* * *
* * * *
* * * * *


*/

function segitiga1(panjang) {
  let stars;
  for (i = 0; i < panjang; i++) {
    for (j = 0; j <= i; j++) { 
      stars += " *";
    }
    stars += " \n";
  }
  return stars
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
  let stars;
  for (let i = 1; i < panjang; i++) {
    for (let j = panjang; j >=  i; j--) { 
      stars += " *"
    }
    stars += " \n"
  }
  return stars;
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
  let stars;
  for (i = 0; i < panjang ; i++) { 
    stars += " "
    for (j = 0; j < i; j++) { 
      stars += " *"
    }

    for (k = 5; k <= j; k ){ 
      stars += " \n"
    }
    console.log(stars)
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
  let stars = " ";
  for (i = panjang ; i > 0; i--) { 
    for (j = 0; j <= panjang ; j++) { 
      stars += "* "; 
    }
    stars += " \n";
  }
  return stars
}

console.log(segitiga4(5));

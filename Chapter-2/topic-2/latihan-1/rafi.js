/*

Output yang diinginkan :


*
* *
* * *
* * * *
* * * * *


*/

function segitiga1(panjang) {
    let result = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < i + 1; j++) {
            result += '* ';
        }
        result += '\n';
    }
    return result;
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
    let result = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang - i; j++) {
            result += '* ';
        }
        result += '\n';
    }
    return result;
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
    let result = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++) {
            if (j < i) {
                result += '  ';
            } else {
                result += '* ';
            }
        }
        result += '\n';
    }
    return result;
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
    let result = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++) {
            if (j < panjang - i - 1) {
                result += '  ';
            } else {
                result += '* ';
            }
        }
        result += '\n';
    }
    return result;
}

console.log(segitiga4(5));

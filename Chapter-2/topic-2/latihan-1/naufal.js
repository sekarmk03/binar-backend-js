/*

Output yang diinginkan :


*
* *
* * *
* * * *
* * * * *


*/

function segitiga1(panjang) {
    output = ''
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            output += '* '
        }
        output += '\n'
    }
    return output
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
    let output = ''
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            output += '* '
        }
        output += '\n'
    }
    return output
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
    let output = '';
    for (let i = 0; i <= panjang; i++) {
        for (let j = panjang; j >= i; j--) {
            output += '*'
        }
        output += '\n'
    }
    return output
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
    let output = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= panjang; j++) {
            if (j >= i) {
                output += '* ';
            } else {
                output += ' '
            }
        }
        output += '\n';
    }
    return output;
}

//console.log(segitiga4(5));

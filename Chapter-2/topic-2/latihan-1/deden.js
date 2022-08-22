/*

Output yang diinginkan :


// *
// * *
// * * *
// * * * *
// * * * * *


*/

function segitiga1(panjang) {
    let segitiga = '';
    for(let i = 0; i < panjang; i++) {
        for(let j = 0; j <= i; j++) {
            segitiga += '* ';
        }
        segitiga += '\n';
    }
    return segitiga;
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
    let segitiga = '';
    for(let i = 0; i < panjang; i++) {
        for(let j = panjang; j > i; j--) {
            segitiga += '* ';
        }
        segitiga += '\n';
    }
    return segitiga;
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
    let segitiga = '';
    for(let i = panjang; i > 0; i--) {
        for(let j = panjang; j > 0; j--){
            if(j > i){
                segitiga += ' ';
            }else{
                segitiga += '* ';
            }
        }
        segitiga += '\n';
    }
    return segitiga;
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
    let segitiga = '';
    for(let i = panjang; i > 0; i--) {
        for(let j = panjang; j > 0; j--){
            if(j < i){
                segitiga += ' ';
            }else{
                segitiga += '* ';
            }
        }
        segitiga += '\n';
    }
    return segitiga;
}

console.log(segitiga4(5));

/*

Output yang diinginkan :


*
* *
* * *
* * * *
* * * * *


*/

function segitiga1(panjang) {
  let result = ''
  for(let a = 1; a <= panjang; a++){
    for(let b = 1; b <= a; b++){
      result += '* '
    }
    result += '\n'
  }
  return result
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
  let result = ''
  for(let a = panjang; a >= 1; a--){
    for(let b = a; b >= 1; b--){
      result += '* '
    }
    result += `\n`
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
  let result = ''
  let space = 0;
  for(let a = panjang; a >= 1; a--){
    if(space > 0){
      for(let i = 1; i <= space; i++){
        result += ' '
      }
    }
    for(let b = a; b >= 1; b--){
      result += '* '
    }
    space += 2;
    result += `\n`
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
  let result = ''
  let space = panjang-1
  for(let a = 1; a <= panjang; a++){
    if(space >= 1){
      for(let i = 1; i <= space; i++){
        result += '  '
      }
    }
    for(let b = 1; b <= a; b++){
      result += '* '
    }
    space -= 1;
    result += '\n'
  }
  return result
}

console.log(segitiga4(5));

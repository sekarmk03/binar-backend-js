let i , j;



function segitiga1(panjang) {
  let bintang='';
  for(i=0;i<panjang;i++){
    for(j=0;j<=i;j++){
      bintang += '* ';
    } 
    bintang += '\n';
  }
  return bintang;
}

console.log(segitiga1(5)+'\n\n');



function segitiga2(panjang) {
    let bintang = '';
    for (i = 0; i < panjang; i++) {
        for (j = panjang; j > i; j--) {
            bintang += '* ';
        }
        bintang += '\n';
    }
    return bintang;
}

console.log(segitiga2(5)+'\n\n');

function segitiga3(panjang) {
    let bintang = '';
    for (i = panjang; i > 0; i--) {
        for (j = panjang; j > 0; j--) {
            if (j > i) {
                bintang += '  ';
            } else {
                bintang += '* '
            }
        }
        bintang += '\n';
    }
    return bintang;
}

console.log(segitiga3(5)+'\n\n');

function segitiga4(panjang) {
    let bintang = '';
    for (i = panjang; i > 0; i--) {
        for (j = 1; j <= panjang; j++) {
            if (j >= i) {
                bintang += '* ';
            } else {
                bintang += '  ';
            }
        }
        bintang += '\n';
    }
    return bintang;
}

console.log(segitiga4(5));

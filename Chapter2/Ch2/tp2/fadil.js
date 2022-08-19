// const { hasUncaughtExceptionCaptureCallback } = require("process");

function segitiga1(panjang) {
    let a = '';
    
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++)    {
            a += `*`;
        }
        a += `\n`;
    }
    return a;
}
console.log(segitiga1(5));

function segitiga2(panjang) {
    let b = '';
    for (let k = 0; k < panjang; k++) {
        for (let c = panjang; c > k; c--) {
            b += `*`;
        }
        b += `\n`;
    }
    return b;
}
console.log(segitiga2(5));

function segitiga3(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++) {
            if ( j < i ) {
                hasil += " ";
            } else {
                hasil += "*";
            }
        }
        hasil += `\n`;
    }
    return hasil;
}
console.log(segitiga3(5));

function segitiga4(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 0; j <= panjang; j++) {
            if ( j < i ) {
                hasil += " ";
            } else {
                hasil += "*";
            }
        }
        hasil += `\n`;
    }
    return hasil;
}
console.log(segitiga4(5));




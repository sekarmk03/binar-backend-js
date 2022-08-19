// nomor 1
function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(5));

// nomor 2
function segitiga2(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(5));

//momor 3
function segitiga3(len) {
    let str = '';
    for (let i = len; i > 0; i--) {
        for (let j = len; j > 0; j--) {
            if (j > i) {
                str += '  ';
            } else {
                str += '* '
            }
        }
        str += '\n';
    }
    return str;
}
console.log(segitiga3(5));

//nomor 4
function segitiga4(len) {
    let str = '';
    for (let i = len; i > 0; i--) {
        for (let j = 1; j <= len; j++) {
            if (j >= i) {
                str += '* ';
            } else {
                str += '  '
            }
        }
        str += '\n';
    }
    return str;
}
console.log(segitiga4(5));
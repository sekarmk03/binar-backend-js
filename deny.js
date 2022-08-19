
function segitiga1(len){
    let str =" ";
    for(let i = 1; i<=len; i++){
        console.log(str);
            str+= "* ";
    } 
    return str; 
}

console.log(segitiga1(5));


function segitiga2(len){
    function bintang(len){
        let str ="";
        for(let i = 1; i<=len; i++){
                str+= "* ";
        } 
        return str; 
    }
    for (let i = 0; len >= i; len--){
    console.log(bintang(len));
    }
}

console.log(segitiga2(5));

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
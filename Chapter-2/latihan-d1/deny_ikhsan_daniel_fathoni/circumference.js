const rl = require ('readline');

const reqInput = rl.createInterface({
    input : process.stdin,
    output : process.stdout
});
    // input function
function input(question){
    return new Promise(resolve => {
        reqInput.question(question, (Val) => {
            resolve(Val);
        });
    });
}

const circumference = (r) => 2 * 3.14 * r;

async function circumf (){
    let r = await input ('Masukkan nilai jari-jari (r) :')
    console.log(`Keliling lingkaran dengan jari-jari ${r} adalah: ` , circumference(r));
    reqInput.close();
}

circumf()
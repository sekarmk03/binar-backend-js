const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function input(question){
    return new Promise(resolve => {
        readline.question(question, data => {
            return resolve(data);
    });
});
}
async function kelilingLingkaran(){
    let r = await input('Masukkan Jari-jari :')
    console.log(2 * Math.PI * r);
    readline.close()
}
kelilingLingkaran()
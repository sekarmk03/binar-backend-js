const { stdin, stdout } = require('process')

let readline = require('readline').createInterface({
    input : stdin,
    output : stdout
});

readline.question("Masukkan masa benda: ", m => {
    readline.question("Masukkan percepatan: ", a => {
    console.log("========================");
    console.log("Rumus hukum II newton : ΣF = m x a")
    const newton = m * a;
    console.log("ΣF = ", +m ,"*", +a);
    console.log("ΣF = ", newton,"N");
    readline.close();
});
});
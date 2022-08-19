const { stdin, stdout } = require('process')

let readline = require('readline').createInterface({
    input : stdin,
    output : stdout
});

readline.question("Masukkan nilai jari-jari: ", r => {
    console.log("=================================================");
    console.log("Nilai jari-jari: ", r);
    console.log("Rumus keliling lingkaran = 2 * phi * jari-jari");
    if (r % 7 == 0 ){
        const phi = 22/7
        const keliling = 2 * phi * r;
        console.log("Hasilnya: ", keliling);
    } else {
        const phi = 3.14
        const keliling = 2 * phi * r;
        console.log("Hasilnya: ", keliling);
    }
    readline.close();
})
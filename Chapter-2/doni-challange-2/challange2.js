const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const urut = require('./sorting.js');

let list_numb = [];
let max, min, lulus = 0, tidaklulus = 0, nilai;
let urutanNilai = [];

const setNilai = (list) =>{
    for(let i=0; i < list.length; i++){
        if(list[i] >= 75){
            lulus++;
        }else{
            tidaklulus++
        }
    }
}

const input_number = (list) => {
    readline.question('', answer =>{
        if(answer ==  'q' || isNaN(answer)){
            if( answer.toLowerCase() !=='q' ){
                console.log("Inputan yang anda masukkan Salah")
                let i = 0
                if(list[i] > 1){
                list = [0];
                }
            }
            max = Math.max.apply(Math, list);
            min = Math.min.apply(Math, list);
            urutanNilai = urut(list);
            nilai = setNilai(list);
            const cari = list.filter(item => item == 90 || item == 100);
            console.log('====================');
            console.log("Nilai Tertinggi :", max);
            console.log("Nilai Terendah :", min);
            console.log("Lulus :", lulus);
            console.log("TidakLulus :", tidaklulus);
            console.log("Urutan Nilai dari yang terendah ke tertinggi :", urutanNilai);
            console.log("Siswa nilai 90 dan nilai 100 :", cari);
            readline.close()
        } else{
            list.push(+answer);
            input_number(list);
        }        
    });
}

const main = () =>{
    console.log(`
        Masukkan Nilai yang diinginkan
        Ketik "q" untuk keluar`)
    input_number(list_numb);
}

main()
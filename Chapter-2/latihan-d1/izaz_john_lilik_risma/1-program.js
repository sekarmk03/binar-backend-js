const readline = require('readline');
const process = require('process');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = (question) => {
  return new Promise(resolve => {
    interface.question(question, (data) => {
      return resolve(data)
    })
  })
}

const pi = 3.14;
const kelilingLingkaran = (r) => 2 * pi * r;

const main = async() => {
  const radius = await input('Masukkan Radius : ');
  console.log(kelilingLingkaran(radius))
  interface.close()
}

main();
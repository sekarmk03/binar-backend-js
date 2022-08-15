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

const main = async() => {
  const radius = await input('Masukkan Radius : ');
  const kelilingLingkaran = (radius) => 2 * 3.14 * radius;
  console.log(kelilingLingkaran(radius))
  interface.close()
}

main();
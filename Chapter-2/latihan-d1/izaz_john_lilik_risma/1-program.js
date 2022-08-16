const readline = require("readline");
const process = require("process");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = (question) => {
  return new Promise((resolve) => {
    interface.question(question, (data) => {
      return resolve(data);
    });
  });
};

const pi = 3.14;

const main = async () => {
  const radius = await input("Masukkan Radius : ");
  const kelilingLingkaran = 2 * pi * radius;
  console.log(kelilingLingkaran);
  interface.close();
};

main();

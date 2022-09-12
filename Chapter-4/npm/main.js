const func = require('./helper');
const fs = require('fs');
const person = require('./person.json');

console.log(func.luasSegitiga(10, 10));
console.log(func.luasPersegi(10));


// read file
const isi = fs.readFileSync('./test.txt', 'utf-8');
console.log(isi);

// write file
const isiBaru = 'ini adalah isi terbaru';
fs.writeFileSync('./test.txt', isiBaru);

function createPerson(person) {
    fs.writeFileSync('./person.json', JSON.stringify(person));
    return person;
}

// const sabrina = createPerson({
//     name: 'Sabrina',
//     age: 29
// });

// console.log(sabrina);

console.log(person);

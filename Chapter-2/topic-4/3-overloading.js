class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    introduce() {
        console.log(`halo, nama saya adalah ${this.name}`);
    }

    work() {
        console.log('working');
    }
}

class Programmer extends Human {
    constructor(name, address, programmingLanguage) {
        super(name, address);
        this.programmingLanguage = programmingLanguage;
    };

    // overloading
    introduce(age) {
        super.introduce();
        console.log(`i am ${age} years old`);
    }

    code() {
        console.log(`code some ${this.programmingLanguage[Math.random() * this.programmingLanguage.length]} language`);
    }
}

let Obama = new Human('Barrack Obama', 'Washington DC');
Obama.introduce();
Obama.work();

console.log('\n\n');

let Isyana = new Programmer('Isyana', 'Jakarta', ['php', 'js', 'golang', 'python']);
Isyana.introduce(21);
Isyana.code();
Isyana.work();

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

    introduce() {
        super.introduce();
        console.log(`i can write ${this.programmingLanguage}`);
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
Isyana.introduce();
Isyana.code();
Isyana.work();

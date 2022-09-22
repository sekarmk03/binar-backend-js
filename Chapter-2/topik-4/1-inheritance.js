class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    introduce() {
        console.log(`Halo, nama saya adalah ${this.name}`);
    }

    work() {
        console.log("Working..");
    }
}

class Programmer extends Human {
    constructor(name, address, programmingLanguage) {
        super(name, address);
        this.programmingLanguage = programmingLanguage;
    }

    introduce() {
        super.introduce();
        console.log(`I can write ${this.programmingLanguage}`);
    }

    code() {
        console.log(`code some ${this.programmingLanguage[Math.floor(Math.random(this.programmingLanguage.length))]} language`);
    }
}

let Obama = new Human("Barrack Obama", "Washington DC");
Obama.introduce();
Obama.work();

console.log("\n");

let Isyana = new Programmer("Isyana", "Jakarta", ["php", "js", "golang"]);
Isyana.introduce();
Isyana.code();
Isyana.work();
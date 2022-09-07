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

    #privateFunction() {
        console.log("Kode rahasia..");
    }

    _protectedFunction() {
        console.log("Ini terproteksi");
    }

    publicFunction() {
        console.log("Ini bisa dikonsumsi publik");
        this.#privateFunction();
        this._protectedFunction();
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
Obama._protectedFunction();

console.log("\n");

let Isyana = new Programmer("Isyana", "Jakarta", ["php", "js", "golang"]);
Isyana.introduce();
Isyana.code();
Isyana.work();
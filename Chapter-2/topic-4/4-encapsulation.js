class Human {
    constructor(name, address, password) {
        this.name = name;
        this.address = address;
        this.encryptedPassword = this.#encrypt(password);
    }

    introduce() {
        console.log(`halo, nama saya adalah ${this.name}`);
    }

    work() {
        console.log('working');
    }

    // private method
    #privateFunction() {
        console.log('kode rahasia');
    }

    // public method
    publicFunction() {
        console.log('ini bisa dikonsumsi publik');
        this.#privateFunction();
        this._protectedFunction();
    }

    // protected method
    _protectedFunction() {
        console.log('ini terproteksi');
    }

    #encrypt(password) {
        return `encrypted-version-of-${password}`;
    }

    #decrypt() {
        return this.encryptedPassword.split('encrypted-version-of-')[1];
    }

    authenticate(password) {
        return password == this.#decrypt();
    };
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

let Obama = new Human('Barrack Obama', 'Washington DC', 'obama123');
// Obama.#privateFunction(); // error
// Obama.publicFunction();
// Obama._protectedFunction();
console.log(Obama.encryptedPassword);
console.log(Obama.authenticate('obama1233'));



let Isyana = new Programmer('Isyana', 'Jakarta', ['php', 'js', 'golang', 'python']);
// Obama.publicFunction();
// Isyana.#privateFunction(); // error

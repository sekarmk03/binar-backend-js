class Human {
    constructor(props) {
        let { name, address, programmingLanguage } = props;
        this.name = name;
        this.address = address;
        this.programmingLanguage = programmingLanguage;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }

    work() {
        console.log(`${this.constructor.name} working...`);
    }

    ability() {
        console.log(`Saya menggunakan bahasa pemrogramman ${this.programmingLanguage}`)
    }
}

const frontend = (Base) => class extends Base {
    interface() {
        console.log('Implementasi design UI/UX ke code');
    }
};

const backend = (Base) => class extends Base {
    database() {
        console.log('Merancang database');
    }
};

/*const fullstack = (Base) => class extends Base {
    api() {
        console.log('Design api');
    }
};*/

class Frontend extends frontend(Human) {
    constructor(props) {
        super(props);
    };

    work() {
        super.work();
        this.interface();
        this.ability();
    }
}

class Backend extends backend(Human) {
    constructor(props) {
        super(props);;
    };

    work() {
        super.work();
        this.database();
        this.ability();
    }
}

class Fullstack extends frontend(backend(Human)) {
    constructor(props) {
        super(props);
    };

    work() {
        super.work();
        this.interface();
        this.database();
    }
}

try {
    
    let fullstack = new Fullstack({
        name: "Lintang",
        address: "Purwokerto",
        programmingLanguage: "Python, Flask, Nuxt Js",
    });

    let frontend = new Frontend({
        name: "Lilik",
        address: "Semarang",
        programmingLanguage: "React Js, Bootstrap, HTML, CSS",
    })

    let backend = new Backend({
        name: "Sabrina",
        address: "Jakarta",
        programmingLanguage: "Javascript, Golang, Python, PHP",
    })

    frontend.work();
    console.log("\n");
    backend.work();
    console.log("\n");
    fullstack.work();
    console.log("\n");
    
} catch (err) {
    console.log(err.message);
}
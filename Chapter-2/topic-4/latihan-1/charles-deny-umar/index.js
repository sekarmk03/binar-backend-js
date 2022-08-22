class Human {
    constructor(props) {
        let { name, address } = props;
        this.name = name;
        this.address = address;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }

    work() {
        console.log(`${this.constructor.name} working...`);
    }
}

const frontEnd = (Base) => class extends Base {
    request() {
        console.log('Request Data JSON');
    }

};

const backEnd = (Base) => class extends Base {
    database() {
        console.log('Manajemen Server')
    }
    api() {
        console.log('Membuat API');
    }
    response() {
        console.log('Respon Data JSON');
    }
};


class FeDev extends frontEnd(Human) {
    constructor(props) {
        super(props);
        
    };

    work() {
        super.work();
        this.request();
        
    }
}

class BeDev extends backEnd(Human) {
    constructor(props) {
        super(props);
        
    };

    work() {
        super.work();
        this.response();
        this.api();
        this.database();
    }
}

class FsDev extends frontEnd(backEnd(Human)) {
    constructor(props) {
        super(props);
    };

    work() {
        super.work();
        this.request();
        this.response();
        this.api();
        this.database();
    }
}


try {
    let deny = new FeDev({
        name: 'Deny',
        address: 'Batam'
    });

    let charles = new BeDev({
        name: 'Charles',
        address: 'Lampung'
    });

    let Umar = new FsDev({
        name: 'Umar',
        address: 'Madura'
    });

    deny.request();
    charles.database();
    charles.api();
    charles.response();
    Umar.request();
    Umar.database();
    Umar.api();
    Umar.response();
} catch (err) {
    console.log(err.message);
}
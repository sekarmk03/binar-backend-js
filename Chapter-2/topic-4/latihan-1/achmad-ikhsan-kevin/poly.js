
class Human {
    constructor(props) {
        let { name, address, position } = props;
        this.name = name;
        this.address = address;
        this.position = position;
    }

    introduce() {
        console.log(`\nHalo, nama saya ${this.name}, dan saya tinggal di ${this.address}`);
    }


    work() {
        console.log(`${this.name} bekerja sebagai ${this.position}`);
    }
}


const Developer = (Develop) => class extends Develop {
    bikinApi() {
        console.log(`membuat API`);
    }
};

const frontendDeveloper = (Develop) => class extends Develop {
    uiux() {
        console.log(`membuat design`);
    }
};

const fullstackDeveloper = (Develop) => class extends Develop {
    full() {
        console.log('haduh pusing');
    }
};



class frontEnd extends Developer(frontendDeveloper(Human)) {
    constructor(props) {
        super(props);
        this.position = props.position;
    };
    
    work() {
        super.work();
        console.log(`Pekerjaan ${this.name} adalah`);
        this.uiux();
    }
}

class fullStack extends Developer(frontendDeveloper(Human)) {
    constructor(props) {
        super(props);
        this.position = props.position;
    };

    work() {
        super.work();
        console.log(`Pekerjaan ${this.name} adalah`);
        this.bikinApi();
        console.log("dan")
        this.uiux();
        console.log("Duh pusing")
    }
}

class backEnd extends Developer(Human) {
    constructor(props) {
        super(props);
        this.position = props.position;
    };

    work() {
        super.work();
        console.log(`Pekerjaan ${this.name} adalah`);
        this.bikinApi();
    }
};

try {
    let backend = new backEnd({
        name: 'Ikhsan',
        address: 'Jakarta',
        position: 'Back End Developer'
    });

    let frontend = new frontEnd({
        name: 'Kevin',
        address: 'Medan',
        position: 'Front End Developer'
    });

    let fullstack = new fullStack({
        name: 'Fadil',
        address: 'Surabaya',
        position: 'Full Stack Developer'
    });


    backend.introduce();
    backend.work();
    
    frontend.introduce();
    frontend.work();
    
    fullstack.introduce();
    fullstack.work();
    

} catch (err) {
    console.log(err.message);
}                                                                                         
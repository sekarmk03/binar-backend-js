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

const backEnd = (Base) => class extends Base {
    createApi() {
        console.log(`${this.name} Create API with Express`);
    }
    
    giveApi() {
      console.log(`${this.name}: I'm Giving my API !`);
    }
};

const frontEnd = (Base) => class extends Base {
    slicing() {
        console.log(`${this.name}: Slicing a Desain From UI UX`);
    }

    requestApi() {
        console.log(`${this.name}:  Where is my API ????`);
    }

    useApi() { 
        console.log(`${this.name} is Using API from Backend`);
    }
};

class FrontEndDeveloper extends frontEnd(Human) {
    constructor(props) {
        super(props);
    };

    work() {
        super.work();
        this.slicing();
        this.useApi();
    }
}


class BackendDeveloper extends backEnd(Human) {
    constructor(props) {
        super(props);
        this.framework = props.framework;
    };

    work() {
        super.work();
        this.createApi();
    }
}

try {
  let Naufal = new BackendDeveloper({
      name: 'Naufal',
      address: 'Surakarta',
      framework: 'Sails'
  });

  Naufal.createApi();

  console.log(Naufal);

  let Rico = new FrontEndDeveloper({
      name: 'Rico',
      address: 'Denpasar',
      framework: 'Nuxt js'
  });

  console.log(Rico);

  Rico.requestApi();

  Naufal.giveApi();

  Rico.useApi();
} catch (err) {
    console.log(err.message);
}

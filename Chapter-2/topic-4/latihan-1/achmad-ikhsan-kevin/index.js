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

const designUIUX = (Base) =>
  class extends Base {
    design() {
      console.log("Design UI/UX");
    }
  };

const buildApi = (Base) =>
  class extends Base {
    build() {
      console.log("Making API...");
    }
  };

class Frontend extends designUIUX(Human) {
  constructor(props) {
    super(props);
  }

  work() {
    super.work();
    this.design();
  }
}

class Backend extends buildApi(Human) {
  constructor(props) {
    super(props);
  }

  work() {
    super.work();
    this.build();
  }
}

class Fullstack extends designUIUX(buildApi(Human)) {
  constructor(props) {
    super(props);
  }

  work() {
    super.work();
    this.build();
    this.design();
  }
}

try {
  let frontend = new Frontend({
    name: "Sambo",
    address: "Jakarta",
  });

  let backend = new Backend({
    name: "Wiranto",
    address: "Jakarta",
  });

  let fullstack = new Fullstack({
    name: "Tirta",
    address: "yogya",
  });

  frontend.design();
  backend.build();
  fullstack.build();
  fullstack.design();

  frontend.work();
  backend.work();
  fullstack.work();
} catch (err) {
  console.log(err.message);
}

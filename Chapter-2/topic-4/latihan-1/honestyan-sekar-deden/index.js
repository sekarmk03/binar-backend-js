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
  makeInterface() {
    console.log('Make Interface');
  }
};

const backEnd = (Base) => class extends Base {
  makeAPI() {
    console.log('Make API');
  }
};


class frontEndDeveloper extends frontEnd(Human) {
  constructor(props) {
    super(props);
    this.skill = props.skill;
  };

  work() {
    super.work();
    this.makeInterface();
  }
}

class backEndDeveloper extends backEnd(Human) {
  constructor(props) {
    super(props);
    this.skill = props.skill;
  };

  work() {
    super.work();
    this.makeAPI();
  }
}

class fullstackDeveloper extends frontEnd(backEnd(Human)) {
  constructor(props) {
    super(props);
    this.skill = props.skill
  };

  work() {
    super.work();
    this.makeInterface();
    this.makeAPI();
  }
}

try {
  let frontEnd = new frontEndDeveloper({
    name: 'Sabrina',
    address: 'Jakarta',
    skill: ['HTML', 'CSS', 'JS']
  });

  let backEnd = new backEndDeveloper({
    name: 'Kak Tatang',
    address: 'Jakarta',
    skill: ['nodeJS', 'mongoDB']
  });

  let fullstack = new fullstackDeveloper({
    name: 'Kak Ara',
    address: 'Bandung',
    skill: ['HTML', 'CSS', 'JS', 'nodeJS', 'mongoDB']
  });

  frontEnd.work();
  frontEnd.makeInterface();

  backEnd.work();
  backEnd.makeAPI();

  fullstack.work();
} catch (err) {
  console.log(err.message);
}

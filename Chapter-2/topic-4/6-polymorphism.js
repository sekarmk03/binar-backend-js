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

const publicServer = (Base) =>
  class extends Base {
    save() {
      console.log("SFX: thank youuu.");
    }
  };

const military = (Base) =>
  class extends Base {
    shoot() {
      console.log("SFX: DOR!");
    }
  };

class Police extends publicServer(military(Human)) {
  constructor(props) {
    super(props);
    this.rank = props.rank;
  }

  work() {
    super.work();
    this.save();
    this.shoot();
  }
}

class Army extends publicServer(military(Human)) {
  constructor(props) {
    super(props);
    this.rank = props.rank;
  }

  work() {
    super.work();
    this.save();
    this.shoot();
  }
}

class Doctor extends publicServer(Human) {
  constructor(props) {
    super(props);
  }

  work() {
    super.work();
    this.save();
  }
}

class Writer extends Human {
  constructor(props) {
    super(props);
  }

  work() {
    super.work();
    console.log("writing books");
  }
}

try {
  let police = new Police({
    name: "Sambo",
    address: "Jakarta",
    rank: "Mayor",
  });

  let army = new Army({
    name: "Wiranto",
    address: "Jakarta",
    rank: "General",
  });

  let doctor = new Doctor({
    name: "Tirta",
    address: "yogya",
  });

  let writer = new Writer({
    name: "Tere Liye",
    address: "sumatera",
  });

  police.shoot();
  army.shoot();

  police.save();
  army.save();
  doctor.save();

  police.work();
  army.work();
  doctor.work();
  writer.work();
} catch (err) {
  console.log(err.message);
}

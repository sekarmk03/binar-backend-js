class Human {
  constructor(props) {
      let { name, address } = props;
      this.name = name;
      this.address = address;
  }

  introduce() {
      console.log(`Hello, my name is ${this.name}`);
  }

  ngoding() {
      console.log(`${this.constructor.name} ngoding...`);
  }
}

const Backend = (Base) => class extends Base {
  api() {
      console.log('SFX: Belakang layar nih boss!!');
  }
};

const Frontend = (Base) => class extends Base {
  ui() {
      console.log('SFX: Sipaling estetik!! ');
  }
};

const Full = (Base) => class extends Base {
  ful() {
      console.log('SFX: Serba bisa nih bosss, senggol dong! ');
  }
};


class backendDev extends Backend(Human) {
  constructor(props) {
      super(props);
  };

  ngoding() {
      super.ngoding();
      this.api();
  }
}

class frontendDev extends Frontend(Human) {
  constructor(props) {
      super(props);
  };

  ngoding() {
      super.ngoding();
      this.ui();
  }
}

class fullStackDev extends Backend(Frontend(Full(Human))) {
  constructor(props) {
      super(props);
  };

  ngoding() {
      super.ngoding();
      this.api();
      this.ui();
      this.ful();
  }
}

try {
  let backend = new backendDev({
      name: 'Doni',
      address: 'Solo'
  });

  let frontend = new frontendDev({
      name: 'Daniel',
      address: 'Medan'
  });

  let fullstack = new fullStackDev({
      name: 'Syifaul',
      address: 'Mekkah'
  });

  backend.introduce();
  backend.api();

  frontend.introduce();
  frontend.ui();

  fullstack.introduce();
  fullstack.api();
  fullstack.ui();
  fullstack.ful();

} catch (err) {
  console.log(err.message);
}
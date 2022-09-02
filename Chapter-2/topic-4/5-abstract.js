class Human {
    constructor(props) {
        if (this.constructor === Human) {
            throw new Error('cant instantiate from abstract class');
        }

        let { name, address } = props;
        this.name = name;
        this.address = address;
    }

    work() {
        console.log('Working...');
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Police extends Human {
    constructor(props) {
        super(props);

        this.rank = props.rank;
    };

    work() {
        console.log('Go to police station, then');
        super.work();
    }
}

try {
    // let abstract = new Human({
    //     name: 'abstract',
    //     address: 'unknown'
    // });

    let police = new Police({
        name: 'Sambo',
        address: 'Jakarta',
        rank: 'Mayor'
    });

    console.log(police);
    police.work();
} catch (err) {
    console.log(err.message);
}
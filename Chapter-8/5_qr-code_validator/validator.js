const Validator = require('fastest-validator');
const v = new Validator;

function main() {
    const request = {
        f_name: 'joko',
        l_name: 'anwar',
        email: 'jokoanwar@gmail.com',
        phone_number: '087812129987',
        age: 8
    };

    const schema = {
        f_name: 'string|min:3|max:30',
        l_name: 'string|min:3|max:30',
        email: 'email',
        phone_number: 'string|min:10|max:13|optional',
        age: 'number|optional'
    };

    const validate = v.validate(request, schema);
    if (validate.length) {
        console.log("error");
        console.log(validate);
    }

    console.log('berhasil');
}

main();
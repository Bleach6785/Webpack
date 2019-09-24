class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('hello ${ this.name }');
    }
}

let user = new User('webpack');
user.greet();

import '../scss/index.scss';
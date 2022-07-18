interface IPerson {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user: IPerson;

user = {
    name: 'Max',
    age: 221,

    greet (phrase: string) {
        console.log(phrase + '' + this.name);

    }
}

user.greet('Привіт')
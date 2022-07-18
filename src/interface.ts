interface IPerson {
   readonly name: string;
    age: number;

    greet(phrase: string): void;
}

interface IPilot {
    flyMessage() : void;
}

class Pilot implements IPerson, IPilot {
    constructor (public readonly name: string, public age: number) {
        this.checkAge();
    }
    private checkAge () {
        if (this.age < 28){
        throw new Error('Pilot too young')
        }
    }

    public greet (phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }

    public   flyMessage(): void {
        console.log('Літак набрав висоту, приємного польоту');
    }
}

const pilot = new Pilot('Max', 32);

pilot.greet('Вас вітає капітан літака');
pilot.flyMessage();

// let user: IPerson;

// user = {
//     name: 'Max',
//     age: 221,

//     greet (phrase: string) {
//         console.log(phrase + ' ' + this.name);

//     }
// }

// user.greet('Привіт ')

abstract class Plane1 {
    protected pilot?: IPilot;

    public sitInPlane (pilot: IPilot) {
        this.pilot = pilot;
    }

    public abstract startEngine(): boolean;

}

class Boing1 extends Plane1 {
    
    public startEngine() {
        if (!this.pilot) {
            throw new Error('No pilot in cabine')
        }

        console.log('Запуск турбін')

        this.pilot.flyMessage();

        return true
    }
}

const boing1 = new Boing1();

pilot.greet('Вас вітає капітан літака');
 boing1.sitInPlane(pilot);

 boing1.startEngine();


//  Приклад іншого класу-наслідника

 class Terrorist implements IPilot {

bluff (phrase: string) {
    console.log(phrase);
}

    public   flyMessage(): void {
        console.log('Наші требування 9 мыльйонів');
    }
 }

 const terrorist = new Terrorist();
 const pilotter = new Terrorist();
 boing1.sitInPlane(pilotter);
 pilotter.bluff('Ми захопили літак');
 boing1.startEngine();

//  Інтерфейс функцій

// type AddFunc = (n1: number, n2: number, n3: number) => number; через інтерфейс

interface AddFunc {
    (n1: number, n2: number, n3: number): number
}

const foo: AddFunc = (n1: number, n2: number, n3: number) => {
return n1 + n2 + n3
}

class House {
    street: string;

    constructor (n: string) {
        this.street = n;
    }

    showAddress (this: House, add: string): void {
        console.log('Address' + this.street + '' + add);
    }
}

const house1 = new House('Middle-earth1');
const house2 = new House('Middle-earth2');
const house3 = new House('Middle-earth2');

// house1.showAddress();

const copyHouse = { showAddress: house1.showAddress, street: 'New address'};

copyHouse.showAddress('add');
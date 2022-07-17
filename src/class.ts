class House {
   private street: string;
   private tenants: string[] = [];

    constructor (n: string) {
        this.street = n;
    }

    public  showAddress (this: House, add: string): void {
        console.log('Address' + this.street + '' + add);
    }

    public addTenant (name: string) {
this.tenants.push(name)
    }

    public showTenant () {
        console.log(this.tenants)
            }
}

const house1 = new House('Middle-earth1');
const house2 = new House('Middle-earth2');
const house3 = new House('Middle-earth2');

// house1.showAddress();

const copyHouse = { showAddress: house1.showAddress, street: 'New address'};

// copyHouse.showAddress('add');

house1.addTenant('Max');
house1.showTenant()
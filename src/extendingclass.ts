class HouseModel {
       private tenants: string[] = [];
    
        constructor (private readonly type: string, protected streett: string) {
            
        }
    
        public  showAddress (this: HouseModel): void {
            console.log('Address' + this.streett);
        }
    
        public addTenant (name: string) {
            this.tenants.push(name)
        }
    
        public showTenant () {
            console.log(this.tenants)
        }
    
        public showType () {
            console.log('Type' + this.type)
     }
    }

    class StoneHouse extends HouseModel {
        private chargeOfTheHouse: string;
        constructor (street: string, general: string) {
        super('stone', street)

        this.chargeOfTheHouse = general;
        }

        public  showAddress (): void {
            console.log('Address' + this.streett);
        }

        public showTenant () {
            console.log('General' + this.chargeOfTheHouse);

            super.showTenant()
        }
    }
    
    const stoneHouse = new StoneHouse('Stone-world', 'Max');

    stoneHouse.addTenant('Tetiana');

    stoneHouse.showTenant();
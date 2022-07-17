abstract class Plane {
    protected pilotInCabine = false;

    public sitInPlane () {
        this.pilotInCabine = true;
    }

    public abstract startEngine(): string;

}

class Maize extends Plane {
    public startEngine() {
        return 'ta-ta-ta'
    }
}

class Boing extends Plane {
    public startEngine() {
        return 'buu tourbine'
    }
}

const maize = new Maize();
const boing = new Boing();

maize.sitInPlane();
boing.sitInPlane();

console.log(maize.startEngine());
console.log(boing.startEngine());

// const plane = new Plane();
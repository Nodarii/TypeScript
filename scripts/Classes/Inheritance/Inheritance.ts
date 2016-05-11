module Inheritance {
    class Animal {
        name:string;

        constructor(theName:string) {
            this.name = theName;
        }

        move(distanceInMeters:number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name:string) {
            super(name);
        }

        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }

    class Bear extends Animal {
        constructor(name:string) {
            super(name);
        }

        move(distanceInMeters = 45) {
            console.log("Move on all fours...");
            super.move(distanceInMeters);
        }
    }

    let kaa = new Snake("Kaa");
    let balu:Animal = new Bear("Tommy the Palomino");

    kaa.move();
    balu.move(34);
}

export module AccessModifiers {
    class Animal {
        protected name:string;

        constructor(name:string) {
            this.name = name;
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
            console.log(`The ${this.name} Slithers...`);
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
    let balu: Animal = new Bear("Balu");

    kaa.move();
    //kaa.name // error ‘name’ is protected and can be accessible within Animal and its subclasses
    balu.move(34);
}
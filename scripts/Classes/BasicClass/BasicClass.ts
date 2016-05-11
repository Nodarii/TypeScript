module BasicClass {
    class Animal {
        name:string;

        constructor(theName:string) {
            this.name = theName;
        }

        move(distanceInMeters:number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    let snake = new Animal("Kaa");
    snake.move();
}
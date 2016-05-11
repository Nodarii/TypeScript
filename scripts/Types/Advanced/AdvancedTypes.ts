type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    animate(dx:number, dy:number, easing:Easing) {
        if (easing === "ease-in") {
            // ...
        } else if (easing === "ease-out") {

        } else if (easing === "ease-in-out") {

        } else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");

type Tree <T> = {
    value: T,
    someStringField: string,
    someIntField: number,
    someOptionalElement?: UIElement
}

let tree:Tree<string> = {
    value: '2',
    someIntField: 1,
    someStringField: '2',
    someOptionalElement: button
};
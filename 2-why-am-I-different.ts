enum Color{ // only this carries over to runtime!
    Red='Red',Green='Green',Blue='Blue'
}
const color: Color=Color.Blue;

interface Shape { //this doesn't
    color: Color;
    width?: number;
    height: number;
}

class Square implements Shape{
    color: Color=Color.Blue; // this doesn't, the class does


    constructor(color: Color) {
        this.color = color;
    }

    height: number=33;


}
console.log(new Square(Color.Blue));
const shape:Shape={color:Color.Blue,height: 33}
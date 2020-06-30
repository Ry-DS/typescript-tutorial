const anyVar: any=3;
function exampleFunction(xx:number){

}
const unknownVar: unknown={};
let neverVar: never;

interface BigPlanet {
    radius: number;
}


const planet: BigPlanet=unknownVar as BigPlanet;

type Animals="Dog"|"Cat"|"Mouse"|"Deer";

let animal: Animals="Cat" as Animals;

switch(animal){
    case "Cat":
        console.log('Cat!');
        break;
    case "Dog":
        console.log('Dog!');
        break;
    case "Deer":
    case "Mouse":
        break;
    default:
        // probably want a comment here, or you'll look insane
        ((val: never)=>val)(animal);

}

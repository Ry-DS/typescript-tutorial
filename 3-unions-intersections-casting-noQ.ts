let numOrString:string|number='hello world!';
numOrString=3;

// let numAndString: string&number='33'; // Not possible! We don't live in quantum computing yet...

interface Human{
    name: string,
    age: number,
    height: number;
}
interface Society{
    people: Array<Human>;
    peopleNames: Array<Human['name']> // still string but better readability
}

type Limbs='arms'|'legs'|'feet';
type Planet='Pandora';
interface AlienX extends Human{ // 👽
     // [k: Limbs]: number; Not possible in interfaces! Must use normal type

}
type Alien={
    [k in Limbs]: number;

} & Human & {planet: Planet};


const being: Alien={planet: "Pandora", age: 0, arms: 0, feet: 0, height: 0, legs: 0, name: ""}


const apiRequest: Alien = <Alien> getAlienFromRadar() ;




function getAlienFromRadar(): unknown{
    return {};
}
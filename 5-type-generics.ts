// we can give type generics to functions, classes, interfaces and types
let number = 3 as any;

function identity<T>(val: T): T {
    return val;
}

let newNum = identity<3 | 4 | 5>(3);

function addHelloAbility<T extends Human>(being: T) {
    return {...being, sayHello: () => console.log(`Hello I am ${being.name}!`)};
}

const niceHuman = addHelloAbility({age: 0, height: 0, name: ""});
const niceAlien = addHelloAbility<Alien>({
    age: 0,
    arms: 0,
    feet: 0,
    height: 0,
    legs: 0,
    name: "Bob the Alien",
    planet: "Pandora"
});

niceHuman.sayHello();
niceAlien.sayHello();

type Colors='Red'|'Green'|'Blue'|'Orange';
type SpecialColors='Red'|'Green'|'Yellow'|'Pink';
type Filter<T, U> = T extends U ? T : never; //recursive on union types


const filtered: Filter<SpecialColors,Colors> = 'Green';


//examples from Prism

interface Layer {
    type: string,

}

interface BoundaryLayerProps extends Layer {
    type: 'boundary',
    data: number[]
}

interface WMSLayerProps extends Layer {
    type: 'wms',
    wmsData: string[];
}

type LayerType = BoundaryLayerProps | WMSLayerProps;

interface LayerSpecificDataTypes {
    boundary: { features: number[] };
    wms: { legend: object[] };
}

type LayerData<L extends LayerType> = {
    layer: L;
    date?: ReturnType<Date['getTime']>
    extent?: number;
    data: LayerSpecificDataTypes[L['type']];

} & (L['type'] extends 'wms' ? { meta: string } : {})

const boundaryLayerData: LayerData<BoundaryLayerProps> = {
    data: {
        features: []
    }, layer: {
        data: [], type: "boundary"
    }
};

const wmsLayerData: LayerData<WMSLayerProps> = {
    meta: "",
    data: {
        legend: []
    },
    layer: {
        wmsData: [], type: "wms"
    }
};




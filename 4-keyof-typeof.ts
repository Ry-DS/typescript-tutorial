import parksJson from './parks.json';

type ParkDefinition={
    id: keyof typeof parksJson,
    size: 'small'|'medium'|'large',
    location: string
}

// let Park: ParkDefinition={...parksJson["Parkwell"],id: "Parkwell"}; // you would need to create a new variable for parksJson[0] and cast it
let Park={...parksJson["Parkwell"],id: "Parkwell",size: parksJson["Parkwell"].size as 'small'|'medium'|'large'}

//keyof also works with objects
const Images={
    dog: 'dog.png',
    cat: 'cat.png',
}

type ProfilePictureData={
    [k in keyof typeof Images]: {size: number, description: string}
}
const profilePictureData: ProfilePictureData={cat: {description: "", size: 0}, dog: {description: "", size: 0}};





interface Example {
    example: number;
    example2?: string;
}
const obj: Example={example: 3};


function keys<T extends object>(obj: T) {

    return Object.keys(obj) as Array<keyof T>;
}

const objKeys = keys(obj);
objKeys.forEach(key=>{

    console.log(key);
})


class Overloaded{



    constructor()
    constructor(num: number,str: string)
    constructor(num?: number, str?: string) {
    }

}

new Overloaded();
// new Overloaded(3); // not allowed!
new Overloaded(3,'hey');

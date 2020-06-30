
// java transient keyword
// transient is basically a way to tell the Java serializer that certain fields shouldn't be serialised into JSON.
// we recreate this here!

const transientKeys: string[] =[];

class Shop {

    @transient
    customerNames: string[] = [];

    items: string[] = [];
    @transient
    customerCardDetails: number[] = [];

    toJSON() {
        const ret:any = {...this};
        transientKeys.forEach(key=>{
            ret[key]=undefined;
        })
        return ret;
    }


}

let shop=new Shop();

console.log(JSON.stringify(shop));

function transient(target: any, propertyKey: string) {
    transientKeys.push(propertyKey);
}

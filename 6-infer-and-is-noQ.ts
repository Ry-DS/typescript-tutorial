async function getTempOutside(location: string): Promise<number> {
    // magic temperature api stuff here...

    return Math.random() * 100;

}

interface WeatherInfo {
    windSpeed?: number,
    planet: 'Pandora' | 'Earth',
    temperature?: UnPromisify<typeof getTempOutside>;
    suns?: FlattenArray<Array<string>>

}

const info: WeatherInfo = {
    // we don't want a promise here!
    planet: "Earth", temperature: 0, windSpeed: 0, suns: 's'

}

type UnPromisify<F extends (...args: any[]) => (Promise<any>)> =
    (F extends (...args: any[]) => Promise<infer U> ? U : never);

type FlattenArray<A extends (Array<any>)> = (A extends Array<infer U> ? U : never);


const arr: Array<WeatherInfo> = [];
const apiResult: unknown = {};

function checkResultIsWeatherInfo(toCheck: any): toCheck is WeatherInfo {
    const weatherInfo = toCheck as WeatherInfo;
    return weatherInfo.planet !== undefined;

}
// arr.push(apiResult) we can't do this without casting! unless...

if (checkResultIsWeatherInfo(apiResult)) {

    arr.push(apiResult);

}
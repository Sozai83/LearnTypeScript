class LightDatabase<T extends string | number | boolean>{
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get(item: T) {
        return this.data;
    }
}

const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('apple');
console.log(stringLightDatabase.get('apple'));
stringLightDatabase.remove('apple');


interface LightDatabase2<T> {
    id: number;
    data: T[]
}

const lightDatabase2: LightDatabase2<number> = {
    id: 3,
    data: [32, 33]
}

//errors
// const lightDatabase3: LightDatabase2<number> = {
//     id: 3,
//     data: [32, 33, 'temp']
// }


type LightDatabase3<T> = {
    id: number;
    data: T[];
}

const lightDatabase3: LightDatabase3<number> = {
    id: 3,
    data: [32, 33]
}

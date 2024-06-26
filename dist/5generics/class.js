"use strict";
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get(item) {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('apple');
console.log(stringLightDatabase.get('apple'));
stringLightDatabase.remove('apple');
const lightDatabase2 = {
    id: 3,
    data: [32, 33]
};
const lightDatabase3 = {
    id: 3,
    data: [32, 33]
};

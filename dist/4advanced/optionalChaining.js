"use strict";
var _a, _b, _c;
const downloadedData = {
    id: 1,
};
//error - console.log(downloadedData.user.name);
//If downloadedData.user is undefined = undefined, if downloadedData exists, return name;
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
//nullish ?? = undefined | null
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';

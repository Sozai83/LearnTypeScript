//works the same if it's type
interface downloadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}

const downloadedData: downloadedData = {
    id: 1,
}

//error - console.log(downloadedData.user.name);
//If downloadedData.user is undefined = undefined, if downloadedData exists, return name;
console.log(downloadedData.user?.name?.first);


//nullish ?? = undefined | null
const userData = downloadedData.user ?? 'no-user';

//|| = undefined | null | 0 | ''
//const userData = downloadedData.user || 'no-user';

//Access interface
type id = downloadedData["id"]
type user = downloadedData["user"]
//array with string
type stringArray = string[];
//string
type Arrayvalue = string[number];
//tupple [string, number, boolean]
type TuppleType = [string, number, boolean];
//string | number | boolean
type TuppleValue = TuppleType[number];
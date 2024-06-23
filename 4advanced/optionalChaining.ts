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
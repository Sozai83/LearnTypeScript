/**
type MappedTypes = {
    tomato: "tomato";
    pumpkin: "pumpkin";
}
 */

type MappedTypes = {
    [P in 'tomato' | 'pumpkin']: P;
}

/**
 * type MappedTypes2 = {
    tomato: string;
    pumpkin: string;
}
 */
type MappedTypes2 = {
    [P in 'tomato' | 'pumpkin']: string;
}


interface Vegetables {
    readonly tomato: string;
    pumpkin: string;
}

/**
type MappedTypes3 = {
    readonly tomato: string;
    pumpkin: string;
}
 */
type MappedTypes3 = {
    [P in keyof Vegetables]: string;
}

/**
 * -readonly = removes readonly
type MappedTypes4 = {
    tomato?: string | undefined;
    pumpkin?: string | undefined;
}
 */
type MappedTypes4 = {
    -readonly [P in keyof Vegetables]?: string;
}


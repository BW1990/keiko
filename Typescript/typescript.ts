// boolean;
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';

// template strings
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// Object
let wizard: object = {
    a: 'John'
}

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple (array with diff types)
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size { Small = 1, Medium =2, Large = 3 };
let sizeName: string = Size[2];

// Any - !!!!! BE CAREFUL
let whatever: any = 'aghhhhhh nooooo';

// void
let sing = (): void => {
    console.log('lalalalaa')
}

// never; makes sure it never returns
let error = (): void => {
    throw Error('oops');
}
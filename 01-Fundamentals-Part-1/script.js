
// let js = 'amazing';

// console.log(40 + 8 + 23 - 10);

// console.log("ali");
// console.log(23);

// let firstName = "Ali";

// console.log(firstName);


// let $function = "jaja";

let COUNTRY = "Mexico";

let CONTINENT = "America1";

let population = 128932000;

console.log(typeof COUNTRY);
console.log(typeof CONTINENT);
console.log(typeof population);

let isIsland = false;

let language = "spanish";

// console.log(isIsland);

// console.log(language);

// population += 1

// console.log(population);


// let description = 'Mexico is in America, and its 128 million people speak Spanish';

// console.log(description);

// console.log("19"-'13'+2-5);

// if (population > 33000000) {
//     console.log(`Mexico's population is above average`);
// } else {
//     console.log(`Mexico's population is not above average`);
// }

// let numNeighbours = prompt(`How many neighbour countries does your country have?`);

// numNeighbours = parseInt(numNeighbours);

// if (numNeighbours === 1) {
//     console.log(`Only 1 border`);
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log("No borders");
// }

// const value1 = '5';
// const value2 = 9;
// let sum = value1 + value2;

// console.log(sum);



// let javascriptIsFun = true;

// console.log(javascriptIsFun);


// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'ali');

// javascriptIsFun = 'YES';




// let age = 30;
// age = 31;

// const birthYear = 1988;
// birthYear = 1990;



if (population < 50000000 && language === "English" && !isIsland) {
    console.log(`Sarah, you can live here`);
} else {
    console.log(`Sarah, ${COUNTRY} doest not meet your criteria`);
}

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3nd place in number of native speakers');
        break;
    case 'hindi':
        console.log(`Number 4`);
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');        
}


const now = 2022;
const ageAli = now - 1988;
const ageSara = now - 2012;

console.log(ageAli, ageSara);

console.log(ageAli * 2, ageAli / 10, 2 ** 3);
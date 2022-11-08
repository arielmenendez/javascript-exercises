const users = require('./users').users;

// 1.- Sort the array by attribute "name" (Descending).
const sortedUsers = users.sort((a, b) => (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) ? -1 : ((b.name.toLocaleLowerCase() < a.name.toLocaleLowerCase()) ? 1 : 0));

console.log(sortedUsers);

// 2.- Calculate the current age of each user and add an attribute called 'age' with the value obtained.
const calculateAge = (birthDateString) => {
    const birthDate = new Date(birthDateString);
    const currentDateDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(currentDateDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

for (const element of users) {
    element.age = calculateAge(element.birthDate);
}

console.log(users);

// 3.- Delete duplicated objects.
const uniqueNames = [];

const uniques = users.filter(element => {
    const isDuplicate = uniqueNames.includes(element.name);

    if (!isDuplicate) {
        uniqueNames.push(element.name);

        return true;
    }

    return false;
});

console.log(uniques);


// 4.- Find the youngest user.
const minorAge = Math.min(...uniques.map(unique => unique.age));
const youngestUser = uniques.filter(unique => unique.age === minorAge);

console.log(youngestUser);

// 5.- Write a function the reverses a string.
const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString('Ariel'));

// 6.- Write a function that filters out numbers from a list.
const removeNums = (arr) => arr.filter(a => isNaN(+a));

console.log(removeNums([1, '2', 'a', 'b']));

// 7.- Write a function that finds an element inside an unsorted list.
const search = (arr, searchItem) => arr.findIndex(a => a === searchItem);

console.log(search(['Ariel', 'Menéndez', 'Méndez'], 'Ariel'));

// 8.- Write a function that showcases the usage of closures.
const multiply = (first) => {
    let a = first;
    return (b) => {
        return a * b;
    };
}

console.log(multiply(2)(3));
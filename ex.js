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


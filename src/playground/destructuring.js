

// const person = {
//     name: 'Mehdi2',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 89
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemey',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);


// Array

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75'];

const [itemName, small, mediumPrice, large] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
// console.log(`A medium coffee (hot) costs $2.50`);
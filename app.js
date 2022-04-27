// let dogName = 'Ben Donich';

// console.log('My dog\'s name is Benny');
// console.log(`${dogName} is very cute.`);


// let age;
// console.log(age);

// if (dogName === 'Ben Donich' || dogName === 'Benny'){
//     console.log('this will print');
// }
// let isCute = true;
// if (dogName === 'Ben Donich' && isCute === true) {
//     console.log('Benny is cute!');
// }

// let a = 5;
// let b = 10;
// if (a >= 5 && b < 20){
//     console.log('this will print if true');
// }

let colors = ['blue', 'red', 'yellow'];
console.log(colors);

console.log(colors[0]);

for (let color of colors){
    console.log(color);
}

// key / value pairs
// let age = 7;
// let dogName = 'Benny';
// let breeds = ['Terrier', 'Chihauhau', 'Pekingese'];

let benny = {
    name: 'Benny',
    age: 7, 
    breeds: ['Terrier', 'Chihauhau', 'Pekingese'],
    'full-name': 'Ben Donich'
};

console.log(benny);

console.log(benny.age);
console.log(benny['age']);

console.log(benny['full-name']);
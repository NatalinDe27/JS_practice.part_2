// 1) Избавится от неуникальных элементов массива

const numbersArray = [1,1,2,3,4,5,5,5,6];
const mySet = new Set(numbersArray);
const arrayWithoutDoubles = Array.from(mySet);
console.log(arrayWithoutDoubles);

// 2) Создать Map который будет по переданному объекту возвращать строку привествия
// greetUser(userBob) // Hello Bob nice to see you
// greetUser(userJane) // How your kids doing Jane?
// Иными словами создать Map где ключ это будет объект а значение строка

const userBob = {
    name: 'Bob',
    age: 29,
}
const userJane = {
    name : 'Jane',
    age: 39,
}
const greetUser = new Map();
greetUser.set (userBob, 'Hello Bob, nice to see you')
greetUser.set (userJane, 'How your kids doing Jane?')
console.log(greetUser.get(userBob))
console.log(greetUser.get(userJane))


// 3) Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию.
let userObj = {
    name: 'John',
    age: 25,
};

let map = new Map();
map.set('name', 'Ann');
map.set(userBob, 38);


function transform (param) {
    if (typeof param === 'object') {
        return new Map(Object.entries(param));
    }
    else if (param instanceof Map) {
        return Object.fromEntries(param.entries());
    }
}
console.log(transform(userObj));
console.log(transform(map));







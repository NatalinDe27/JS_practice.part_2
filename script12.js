// Создать цепочку прототипов машина => определенная марка машины.
//     У итогового инстанса должны быть как функции машины типа ехать и тормозить из прототипа так и функции связанные с маркой машины типа вертикального открытия дверей Lamborghini.

const clothes = {
    made: () => console.log('made: in Italy'),
    women: () => console.log('women'),
};
const skirt = {
    brand: () => console.log('Gucci'),
    zip_closure: () => console.log(true),
}

Object.setPrototypeOf(skirt, clothes);
console.log (skirt)

for (let prop in skirt) {
    console.log(prop);
    console.log(skirt.hasOwnProperty(prop))
}

function LeatherSkirt (product) {
    this.product = product;
    this.material = () => console.log('Leather piping: Lambskin');
    this.color = () => console.log('color: red')
}

let productLeatherSkirt = new LeatherSkirt.prototype.constructor ('productLeatherSkirt');

Object.setPrototypeOf(productLeatherSkirt, clothes);

console.log (productLeatherSkirt)

for (let prop in productLeatherSkirt) {
    console.log(prop);
    console.log(productLeatherSkirt.hasOwnProperty(prop))
}


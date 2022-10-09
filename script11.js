// // 1.Создать функцию которая будет принимать имя пользователя и время через которое он хочет чтоб его поприветствовали. Время пользователь хочет вводить строкой в разном формате например '10 minutes' , '20 seconds', '1 hour', '2 hours'
function greetingFunc(name, time) {
    const [value, type] = time.split(' ');
    let timeOut;
    switch (type) {
        case 'seconds':
            timeOut = +value * 1000;
            break;

        case 'minutes':
            timeOut = +value * 60 * 1000;
            break;

        case 'hour':
            timeOut = +value * 60 * 60 * 1000;
            break;

        default:
            break;
    }

    function sayHi() {
        return `Hi, ${name}.`;
    }

    setTimeout(sayHi, timeOut);
    return sayHi();
}

console.log(greetingFunc('Helga', '25 seconds'));


// 2.Создать функцию которая будет или сериализировать или десериализировать объект в зависимости от того в какой форме он был передан

let obj = {
    name: 'David',
    age: 32,
}
let str2 = JSON.stringify(obj);


function typeString(str) {
    if (typeof str === 'string') {
        return JSON.parse(str);
    } else if (typeof str === 'object') {
        return JSON.stringify(str);
    } else {
        return 'Error';
    }
}

console.log(typeString(`${str2}`));


// 3.Создать функцию которая вернет true или false в зависимости от того что в нее передать JSON строку или обычную строку

let str1 = 'How old are you?';

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

console.log(IsJsonString(`${str1}`));
console.log(IsJsonString(`${str2}`));



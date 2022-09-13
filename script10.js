// 1.Создать функцию которая будет принимать миллисекунды и вернет true или false в зависимости от того сегодня ли то число которое было передано

function isToday(ms) {
    if (new Date(ms).getFullYear() === new Date().getFullYear()) {
        if (new Date(ms).getMonth() === new Date().getMonth()) {
            if (new Date(ms).getDate() === new Date().getDate()) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(isToday(1662380100000)); //05.09.2022
console.log(isToday(1663157700000)); //14.09.2022


// 2.Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды

    function zero_first_format(value) {
        if (value < 10) {
        value='0'+value;
    } return value;
    }

    function date_time(ms) {
        const current_datetime = new Date(ms);
        const day = zero_first_format(current_datetime.getUTCDate());
        const month = zero_first_format(current_datetime.getUTCMonth()+1);
        const year = current_datetime.getUTCFullYear();
        const hours = zero_first_format(current_datetime.getUTCHours());
        const minutes = zero_first_format(current_datetime.getUTCMinutes());
        let result = day+"."+month+"."+year+" "+hours+":"+minutes;
        return result;
    }

console.log(date_time(1665666780000))

// 3.Создать функцию которая принимает миллисекунды и вернет количество времени которое прошло или должно пройти с текущего момента.

function calcTime (ms) {
        let start =  Date.now ()
        return ((start - ms)/87600000).toFixed (0) + ' days';
}

console.log(calcTime(1656332100000));
console.log(calcTime(1687868100000));



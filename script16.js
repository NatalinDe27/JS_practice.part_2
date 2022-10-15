// 1) Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.
function* generateNumber(start, end) {
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * (end - start + 1)) + start;
        yield num;
    }
}

for (let result of generateNumber(57, 207)) {
    console.log(result)
}


// 2) Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" выполнение асинхронной функции brushTeeth перед тем как приступать к выполнению следующей асинхронной функции)


async function dailyRoutine(time) {
    const dayStarts = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`I wake up at ${time} o\`clock. I have breakfast, have a shower, brush teeth, put on make-up and get dressed.`), 1000);
    });
    let result1 = await dayStarts;
    console.log(result1);

    const getWork = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`I drive to my work at 8 o\`clock.`), 1000);
    });
    let result2 = await getWork;
    console.log(result2);

    const startWork = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`I start work at 9 o\`clock.`), 1000);
    });
    let result3 = await startWork;
    console.log(result3);

    const finishWork = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`I finish work at 6 p.m.`), 1000);
    });
    let result4 = await finishWork;
    console.log(result4);

    const getHome = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`I get home at 7 p.m.`), 1000);
    });
    let result5 = await getHome;
    console.log(result5);

    const makeHw = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`I make homework for IT or English about 3 hour.`), 1000);
    });
    let result6 = await makeHw;
    console.log(result6);

    const goSleep = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Then I go to a bed.`), 1000);
    });
    let result7 = await goSleep;
    console.log(result7);

}

dailyRoutine(7);
// Создать цепочку промисов (длинной минимум в 3) - свой распорядок дня например
// (brushTeeth.then(() => dosmthelse.then(())

const dailyRoutine = new Promise((resolve, reject) => {
    let time = 7;
    setTimeout(() => resolve (time), 1000);
});

dailyRoutine
    .then ((time) => {
    console.log(`I wake up at ${time} o\`clock. I have breakfast, have a shower, brush teeth, put on make-up and get dressed.`)
    return time + 1;
    })
    .then ((time) => {
        console.log(`I drive to my work at ${time} o\`clock.`)
        return time + 1;
    })
    .then ((time) => {
    console.log(`I start work at ${time} o\`clock.`)
    return time + 9;
    })
    .then ((time) => {
        console.log(`I finish work at ${time} o\`clock.`)
        return time + 1;
    })
    .then ((time) => {
        console.log(`I get home at ${time} o\`clock.`)
        return time + 1;
    })
    .then ((time) => {
        console.log(`I make homework for IT or English at ${time} o\`clock.`)
        return time + 3;
    })
    .then ((time) => {
        console.log(`I go to bed at ${time} o\`clock.`)
    })
    .finally(() => console.log('The End of the day.'));


'use strict'

let externalRemainder = calculateRemainder(15, 2);

function calculateRemainder(x, y) {
    let wholePartOfAnswer = parseInt(x / y);
    let remainder = parseInt((y * ((x / y) - wholePartOfAnswer)));

    //  console.log(`Your answer is ${wholePartOfAnswer} with a remainer of ${remainder}.`)
    return remainder;

};

for (var i = 0; i < 100; i++) {
    console.log(`Your remainer is ${calculateRemainder(3, i)}.`);
}


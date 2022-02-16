// 1
let randomNum = Math.floor(Math.random() * (5)+1);
console.log(randomNum);

// 2 
if (randomNum >= 4){
    console.log(`Number is greater than or equal to 4`);
} else if (randomNum == 2 || randomNum == 3) {
    console.log(`Number is either 2 or 3`);
} else {
    console.log(`Number is equal to 1`);
}

// 3
if (randomNum != 3) {
    console.log(`Number cannot equal 3`);
}

// 4
if (randomNum !=3 && randomNum !=5 ) {
    console.log(`Number cannot equal 3 or 5`);
}

// 5
if (randomNum == 2 || randomNum == 4 ) {
    console.log(`Number is equal to 2 or 4`);
}
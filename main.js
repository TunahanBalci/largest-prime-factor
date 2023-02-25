let counter = 2;
let input = 1000;
const primeFactors = [];

if (input > 999999) {
    number = (input / 2);
}
else {
    number = input;
}

function isPrime() {
    for (let divider = 2; divider < counter; divider++) {
        if (counter % divider == 0) {
            return false;
    }
}
    return true;
}

while (counter <= number){
    if (isPrime() == true){
        primeFactors.push(counter);
        console.log("Processing number: " + counter);
    }
    counter++;
}

let lastElement = primeFactors[primeFactors.length - 1];

console.log (lastElement);
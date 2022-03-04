
let sum = 1;

for (let index = 1; index < 3; index++) {
    sum += index * (index+1)/2
}

function c(n) {
    if (n === 1) {
        return 1;
    } else return n*(n-1)/2 + c(n-1)
}

console.log(c(3))
function odd_even(sum){
    if(sum % 2 ===0){
        console.log(`Even Number ${sum}`);
        return sum;
    }
    else{
        console.log(`odd Number ${sum}`);
        return sum;
        
    }
}

const num = 44;
let sum = odd_even(num);










// function odd_even(number) {
//     if (number % 2 === 0) {
//         return 'Even';
//     } else {
//         return 'Odd';
//     }
// }

// // Example usage
// const num1 = 7;
// const num2 = 12;

// console.log(`${num1} is ${odd_even(num1)}`);
// console.log(`${num2} is ${odd_even(num2)}`);

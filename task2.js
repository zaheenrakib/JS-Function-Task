

function sumOfEvenNumber(number){
        if(number % 2 ===0){
            let sum = number / 2;
            return sum;
        }
        else if (number % 2 !== 0){
            let sum = number * 2;
            return sum;
        }
}

let num = 90;

const sum = sumOfEvenNumber(num);
console.log(sum);

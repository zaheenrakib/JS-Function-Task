
const str = '1101010010101001100';

function binaryStr(binaryString){
    const zeroMatch = binaryString.match(/0/g);
    return zeroMatch.length;

}

const binary = binaryStr(str);
console.log(binary);






// const binaryString = '1101010010101001100';

// function count_zero(binaryString) {
//     // Use regular expression to match all occurrences of '0' in the string
//     const zeroMatches = binaryString.match(/0/g);

//     // Check if there are zero matches and return the count, or return 0 if no matches
//     return zeroMatches ? zeroMatches.length : 0;
// }

// // Example usage

// const zeroCount = count_zero(binaryString);

// console.log(`Number of 0's in the binary string: ${zeroCount}`);


const array = [4,5,6,7,8,9,10];

 function make_avg(number){
    // for( num of number){
    //     console.log(num);
        
    // }
    let sum = 0;

    for( let i = 0; i < number.length; i++){
        let getnum = number[i];
        sum = sum + getnum; 
    }
    // console.log(sum)

    let avg = sum / number.length;
    // console.log(avg)
    return avg;
    
 }

 let sum = make_avg(array);
 console.log(sum);
 
 
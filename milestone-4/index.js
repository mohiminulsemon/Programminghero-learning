// Problem 1: Let’s play a mind game

//perform simple  arithmetic operations

function mindGame(Number){
    if(typeof Number === "number" ){
    Number = (((Number*3)+10)/2)-5;
    return Number; }
    else {
        return "error: please input value in number";
    }
}



// Problem 2: Finding even or odd

// determine the length of  a given string is even or odd

function evenOdd(word){
    
    if(typeof word === "string" ) {
    if (word.length %2 == 0) {
        return "even";
    } 
    else {
        return "odd";
    } }
    else{
        return "error: please give a string";
    }
}

// Problem 3: Is Less or Greater than seven

// A Function to generate less/greater than 7 and print substraction/multiplication result accordingly

function isLGSeven(number){
    if(typeof number === "number" ){
    if ((number-7)<7) {
        return number-7;
    } 
    else {
        return 2*number;
    }}
    else{
        return "error: please input value in number";
    }
}

// Problem 4: Finding Bad data

// A Function to count negative numbers in the given array

function findingBadData(number) {

    if(Array.isArray(number) === true ){
    let negNumber = 0;
    for (const x in number) {
        if(number[x] < 0)
            negNumber++;
    }
    return negNumber; }
    else{
        return "error: please input an array";
    }
}

// Problem 5: Convert your gems into diamond

// A function to generate convertion of gems to diamond 

function gemsToDiamond(friend1,friend2,friend3) {
    if( (friend1 && friend2 && friend3) !== undefined){
        if (isNaN(friend1) || isNaN(friend2) || isNaN(friend3)) {
            return "You should input numbers";
        }
        else {
            let totalDiamond = friend1 * 21 + friend2 * 32 + friend3 * 43;
            if (totalDiamond > 2000) {
                return totalDiamond - 2000;
            } else {
                return totalDiamond;
            }
        } }
    else{
        return "error: please input all parameter";
    }
}
console.log(gemsToDiamond(1, 1, 1));
console.log(gemsToDiamond(1, 1));
console.log(gemsToDiamond(1, [-4,-9,-5,-33,-55]));
console.log(gemsToDiamond([-4,-9,-5,-33,-55],[-4,-9,-5,-33,-55],[-4,-9,-5,-33,-55]));
console.log(gemsToDiamond(20, 200, 50));
console.log(gemsToDiamond(20, "200", 50));
console.log(gemsToDiamond(20, "2abc00", 50));
console.log(gemsToDiamond(100, 5, 1));
console.log(gemsToDiamond([-4,-9,-5,-33,-55],'hello','hunny'));
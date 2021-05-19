/*
This file holds all functions to carry out the three simple mathematic
tasks required of app.js

*/

// First we build a frequency counter to create an object from a given array 
// Where we can list how many times a given number occurs in that array

function frequencyCounter(arr){

    return arr.reduce((accum, next) =>{
        accum[next] = (accum[next] || 0) + 1;
        return accum
    }, {});
};

// Then we create a function to determine the Mode of the given numbers
// That is the number that occurs the most 

function findMode(arr){
    let arrangedNums = frequencyCounter(arr);


    let count = 0;
    let mode;

    for(let key in arrangedNums){
        if(arrangedNums[key] > count){
            mode = key;
            count = arrangedNums[key];
        }
    }

    return +mode;
}

// For the Mean and Median considering that the numbers we'll be working with
// will be entered into the url as strings, we create a function that will
// convert a nums as string array to a numbers array. This function will
// also validate each item in the array making sure it is a number.


function convertAndValidateNumsArr(numAsStrArr){
    let result = [];

    for (let i = 0; i < numAsStrArr.length; i++){
        let validNum = Number(numAsStrArr[i]);

        if(Number.isNaN(validNum)){
            return new Error(
                `The value of ${numAsStrArr[i]}, at index ${i} is not a valid number`
            );
        }

        result.push(validNum);
    }

    return result;

}

// The next function is a function that calculates the mean given a numbers array

function findMean(numsArr){
    if(numsArr.length === 0) return 0;
    return numsArr.reduce((acc, next) => {
        return acc + next;
    }) / numsArr.length;
}

// This nest helper function calculates the median of an array of numbers 

function findMedian(numsArr){
    // We need to sort the numsArr to get the middle element 
    numsArr.sort((a, b) => a - b);

    let middleIndex = Math.floor(numsArr.length / 2);
    let median;

    if (numsArr.length % 2 === 0){
        median = (numsArr[middleIndex] + numsArr[middleIndex - 1]) / 2;
    }
    else[
        median = numsArr[middleIndex]
    ]

    return median;
}

module.exports={
    frequencyCounter,
    findMode,
    convertAndValidateNumsArr,
    findMean,
    findMedian
}
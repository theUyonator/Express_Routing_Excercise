const {findMedian, findMean, findMode} = require("./helper");

describe("find median", function (){
    let evenSetOfNums;
    let oddSetOfNums;

    beforeAll(function(){
        evenSetOfNums = [1, 2, 3, 4, 5, 6];
        oddSetOfNums = [3, 5, 9, 0, 5, 6, 7];
    })

    test("it finds the median in an even set of numbers", function (){
        const median = findMedian(evenSetOfNums);
        expect(median).toEqual(3.5);
    })

    test("it finds the median in an odd set of numbers", function (){
        const median = findMedian(oddSetOfNums);
        expect(median).toEqual(5);
    })

})


describe("find mean", function (){
    let validSetOfNums;
    let empty;

    beforeAll(function(){
        validSetOfNums = [3, 5, 9, 0, 5, 6, 7];
        empty=[];
    })

    test("it finds the mean of a valid array of numbers", function (){
        const mean = findMean(validSetOfNums);
        expect(mean).toEqual(5);
    })

    test("it sets the mean of an empty array to 0", function (){
        const mean = findMean(empty);
        expect(mean).toEqual(0);
    })

})

describe("find mode", function (){
    test("it finds the number that occurs the most in a given array and returns it as a string", function (){
        const arr = [3,3,5,3,4,5,0,6,10,8,3,7];
        const mode = findMode(arr);
        expect(mode).toEqual("3");
    })

})
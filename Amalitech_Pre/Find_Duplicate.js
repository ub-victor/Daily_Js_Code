/*
Find the First Duplicate

Scenario
You are building a system that receives a list of transaction IDs.
A transaction ID should appear only once

Given an array of transaction IDs, Return the first ID that appears more than once
If there is no duplicatite, return -1
The syntax new Set() create a collection of Unique values: 
const numbers = new Set([1,2,3,4,5,6,6,6]);
console.log(numbers)
*/

const firstDuplicate = (arr) =>{
    const seen = new Set();// this will store the unique values we have seen so far

    for(const num of arr){
        if(seen.has(num)){// if the number is already in the set, it means we have seen it before
            return num
        }

        seen.add(num);// if the number is not in the set, we add it to the set
    }
    return -1;
}

console.log(firstDuplicate([1, 2, 3, 4, 5, 6, 6, 6])); // Output: 6